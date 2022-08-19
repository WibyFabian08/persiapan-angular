import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((module) => module.UsersModule)
  },
  {
    path: "heroes",
    canActivate: [AuthGuard],
    loadChildren: () => import("./heroes/heroes.module").then((module) => module.HeroesModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "users"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
