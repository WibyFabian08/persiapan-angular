import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent implements OnInit {
  heroForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })
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
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (id) {
      this.title = "Edit"
      this.heroId = id
      if (this.heroId !== NaN) {
        this.heroService.getById(id)
          .subscribe({
            next: (data: any) => {
              this.heroForm.patchValue({
                name: data.name,
                description: data.description
              })
              this.isLoading = false
            },
            error: (err) => {
              console.log(err)
              this.isLoading = false
            }
          })
      }
    } else {
      this.title = "Add"
    }
  }

  goBack = () => {
    this.location.back();
  };

  handleAdd = () => {
    this.isLoading = true;

    if (this.heroId) {
      this.heroService.update(this.heroId, this.heroForm.value).subscribe({
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
      this.heroService.create(this.heroForm.value).subscribe({
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
