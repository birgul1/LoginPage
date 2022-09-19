import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {switchMap} from "rxjs";
import {UserState} from "../../../lib/state";
import {Router} from "@angular/router";
import {InquireUserTypes} from "../../../lib";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private store: Store, private router: Router, private formBuilder: FormBuilder) {
  }
  userAddForm:any=FormGroup;
  //userLogin:UserLogin=new UserLogin();

  createUserAddForm(){
    this.userAddForm=this.formBuilder.group({
      userName:["", Validators.required],
      password:["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.createUserAddForm();
    /*this.store.dispatch(new InquireUserTypes({userName: 'birgul', password:'123'}))*/
  }
add(){
    if (this.userAddForm?.valid){

    }
}


  loginButton() {
    console.log(this.userAddForm.get('userName').value)
    this.store.dispatch(new InquireUserTypes({userName: this.userAddForm.get('userName').value , password: this.userAddForm.get('password')}))
      .pipe(switchMap(() => this.store.selectOnce(UserState.user)))
      .subscribe({
        next: (response) => {
          console.log(response);
          if (response.userTypeList?.entityCodeName === 'user') {
            // user sayfasına yönlendir
            this.router.navigate(['user']);
          } else if (response.userTypeList?.entityCodeName === 'admin') {
            this.router.navigate(['admin']);
            // admin sayfasına yönlendir
          }
        }
      })
    /* //Api çağrılması.
     this.store.dispatch(new InquireUserTypes({userName: 'birgul', password:'123'}));
     //Anlık selector çağrılması
     this.store.selectSnapshot(UserState.user);*/
  }
  registerButton() {
    this.router.navigate(['register']);
  }



}
