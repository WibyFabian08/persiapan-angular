import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeroesComponent,
    NavbarComponent,
    AddHeroComponent,
    DashboardComponent,
    DetailHeroComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
