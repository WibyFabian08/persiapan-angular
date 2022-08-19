import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
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
    path: "users",
    loadChildren: () => import ("./users/users.module").then((module) => module.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
