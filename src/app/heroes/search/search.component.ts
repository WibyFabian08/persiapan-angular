import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero-service.service';
import { Hero } from '../interfaces/hero';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  searchData: Hero[] = [];
  input: string = '';

  constructor(
    private heroService: HeroService,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getSearch = (event: any) => {
    this.heroes.forEach((data: any) => {
      if (event.target.value.length > 3) {
        if (data.name.indexOf(event.target.value) != -1) {
          this.searchData = [];
          setTimeout(() => {
            this.searchData.push(data);
          }, 300);
        } else {
          this.searchData = [];
        }
      } else {
        this.searchData = [];
      }
    });
  };

  getHeroes = () => {
    let data: any = this.userService.getToken();
    let obj = JSON.parse(data);
    
    this.heroService.getAll(obj.id).subscribe({
      next: (data) => {
        let buffer: Hero[] = [];
        data.map((data) => {
          data.name = data.name.toLowerCase();
          buffer.push(data);
        });

        this.heroes = buffer;
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  handleClick = (id: any) => {
    this.searchData = [];
    this.input = '';
    this.router.navigate([`heroes/detail/${id}`]);
  };
}
