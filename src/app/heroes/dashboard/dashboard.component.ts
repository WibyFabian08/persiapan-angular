import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  isLoadingFetch: boolean = false
  isLoadingDelete: boolean = false

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

  deleteHero = (id: any) => {
    this.isLoadingDelete = true
    this.heroService.deleteById(id)
      .subscribe({
        next: (data) => {
          alert("Hapus Data Berhasil")
          this.getHeroes()
          this.isLoadingDelete = false
        },
        error: (err) => {
          console.log(err)
          this.getHeroes()
          this.isLoadingDelete = false
        }
      })
  }

}
