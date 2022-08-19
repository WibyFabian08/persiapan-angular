import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus = [
    {
      name: "Dashboard",
      path: "dashboard"
    },
    {
      name: "Add Hero",
      path: "add"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout = () => {
    localStorage.clear()
    this.router.navigate(["users"])
  }

}
