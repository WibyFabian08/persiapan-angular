import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    id: undefined,
    name: "",
    description: ""
  }
  isLoadingAdd: boolean = false

  constructor(private location: Location, private heroService: HeroService) { }

  ngOnInit(): void {
  }

  goBack = () => {
    this.location.back()
  }

  handleAdd = () => {
    this.isLoadingAdd = true
    this.heroService.create(this.hero)
    .subscribe({
      next: (data) => {
        this.goBack()
        this.isLoadingAdd = false
      },
      error: (err) => {
        console.log(err)
        this.isLoadingAdd = false
        }
      })
  }

}
