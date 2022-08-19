import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  isLoading: boolean = false

  get firstname() {
    return this.registerForm.get('email');
  }

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    this.isLoading = true
    this.userService.register(this.registerForm.value)
      .subscribe({
        next: (data) => {
          this.router.navigate(["users/login"])
          this.isLoading = false
        },
        error: (err) => {
          console.log(err)
          this.isLoading = false
        }
      })
  }

}
