import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: "",
    component: HeroesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "add",
        component: AddHeroComponent
      },
      {
        path: "detail/:id",
        component: DetailHeroComponent
      },
      {
        path: "edit/:id",
        component: AddHeroComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
