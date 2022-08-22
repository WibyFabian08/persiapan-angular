import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service.service';
import { UsersService } from 'src/app/users/services/users.service';
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
  

  constructor(private heroService: HeroService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes = () => {
    let data: any = this.userService.getToken()
    let obj = JSON.parse(data)
    
    this.isLoadingFetch = true
    this.heroService.getAll(obj.id)
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
