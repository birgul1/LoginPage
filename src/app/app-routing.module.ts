import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasketComponent} from "./basket/basket.component";
import {LoginComponent} from "../../lib";
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "./usertype/user/user.component";
import {AdminComponent} from "./usertype/admin/admin.component";
import {SelectedofferpageComponent} from "./selectedofferpage/selectedofferpage.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'basket', component:BasketComponent},
  {path:'register', component:RegisterComponent},
  {path:'selectedOfferPage', component:SelectedofferpageComponent},
  {path:'user', component:UserComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
