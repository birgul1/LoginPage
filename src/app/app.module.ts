import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BasketComponent} from "./basket/basket.component";
import {RegisterComponent} from "./register/register.component";
import {SelectedofferpageComponent} from "./selectedofferpage/selectedofferpage.component";
import {UserComponent} from "./usertype/user/user.component";
import {AdminComponent} from "./usertype/admin/admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {UserState} from "../../lib/state";
import {SelectedOfferState} from "../../lib/state/selectedOffer.state";
import {OfferState} from "../../lib/state/offer.state";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    RegisterComponent,
    SelectedofferpageComponent,
    UserComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([UserState, OfferState,SelectedOfferState], {
      developmentMode: !environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
