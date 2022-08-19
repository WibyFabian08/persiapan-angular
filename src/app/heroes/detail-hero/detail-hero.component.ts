import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  hero: Hero | undefined
  isLoadingFetch: boolean = false

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  goBack = () => {
    this.location.back();
  };

  getHero = () => {
    this.isLoadingFetch = true
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.heroService.getById(id)
      .subscribe({
        next: (data) => {
          this.hero = data
          this.isLoadingFetch = false
        },
        error: (err) => {
          console.log(err)
          this.isLoadingFetch = false
        }
      })
  };
}
