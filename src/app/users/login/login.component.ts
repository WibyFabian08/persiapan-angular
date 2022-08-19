import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  isLoading = false

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    this.isLoading = true
    this.userService.login(this.loginForm.value.email)
      .subscribe({
        next: (data: any) => {
          if (data.length > 0) {
            if (data[0].password === this.loginForm.value.password) {
              this.router.navigate(["heroes"])
              localStorage.setItem("user", JSON.stringify(data[0]))
              this.isLoading = false
            } else {
              alert("Password Salah")
              this.isLoading = false
            }
          } else {
            alert("Akun Tidak Ditemukan")
            this.isLoading = false
          }
        },
        error: (err) => {
          console.log(err)
          this.isLoading = false
        }
      })
  }

}
