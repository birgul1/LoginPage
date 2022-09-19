import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private passwordRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  constructor(private router:Router, private formbuilder:FormBuilder) { }

  registerForm:any=FormGroup;

  createRegisterForm(){
    this.registerForm=this.formbuilder.group({
      userName:[null, Validators.required],
      password:[null, Validators.required, Validators.minLength(6), Validators.maxLength(12),],
      confirmPassword:[null, Validators.required, Validators.compose([
        Validators.pattern("^(?=\\S*[a-z])(?=\\S*[A-Z])(?=\\S*\\d)(?=\\S*[^\\w\\s])\\S{8,}$")
      ])
      ],
      userType:[null, Validators.required],
    })
  }
  ngOnInit(): void {
    this.createRegisterForm();
  }
  registerAdd(){
    console.log("akdaksdmk")
    this.router.navigate([''])

    if (this.registerForm.valid){
    }
  }
 /* registerButton(){
    this.router.navigate(['login'])
  }*/
}
