import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = []
  searchData: Hero[] = []
  input: string = ""

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getSearch = (event: any) => {
    this.heroes.forEach((data: any) => {
      if (event.target.value.length > 3) {
        if (data.name.indexOf(event.target.value) != -1) {
          this.searchData = []
          setTimeout(() => {
            this.searchData.push(data)
          }, 300)
        } else {
          this.searchData = []
        }
      } else {
        this.searchData = []
      }
    })
  }

  getHeroes = () => {
    this.heroService.getAll()
      .subscribe({
        next: (data) => {
          let buffer: Hero[] = []
          data.map((data) => {
            data.name = data.name.toLowerCase()
            buffer.push(data)
          })

          this.heroes = buffer
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  handleClick = (id: any) => {
    this.searchData = []
    this.input = ""
    this.router.navigate([`detail/${id}`])
  }

}
