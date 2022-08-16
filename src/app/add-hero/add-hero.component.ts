import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    id: undefined,
    name: '',
    description: '',
  };
  isLoading: boolean = false;
  heroId: number | undefined;
  title: string = "Add"

  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.heroId = id
    this.title = "Edit"

    if(this.heroId) {
      this.heroService.getById(id)
      .subscribe({
        next: (data) => {
          this.hero = data
          this.isLoading = false
        },
        error: (err) => {
          console.log(err)
          this.isLoading = false
        }
      })
    }
  }

  goBack = () => {
    this.location.back();
  };

  handleAdd = () => {
    this.isLoading = true;

    if(this.heroId) {
      this.heroService.update(this.heroId ,this.hero).subscribe({
        next: (data) => {
          this.goBack();
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
      });
    } else {
      this.heroService.create(this.hero).subscribe({
        next: (data) => {
          this.goBack();
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
      });
    }
  };
}
