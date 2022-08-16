import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  isLoadingFetch: boolean = true

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes = () => {
    this.isLoadingFetch = true
    this.heroService.getAll()
      .subscribe({
        next: (data) => {
          // let buffer = data.slice(0, 6)
          this.heroes = data
          this.isLoadingFetch = false
        },
        error: (err) => {
          console.log(err)
          this.isLoadingFetch = false
        }
      })
  }

}
