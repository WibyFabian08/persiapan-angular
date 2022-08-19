import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  get firstname() {
    return this.registerForm.get('email');
  } 

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    console.log(this.registerForm)
  }

}
