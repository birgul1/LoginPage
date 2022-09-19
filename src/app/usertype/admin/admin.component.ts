import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Offer} from "../../../../lib/models/offer";
import {Store} from "@ngxs/store";
import {InquireOffers} from "../../../../lib/actions/offer.actions";
import {switchMap} from "rxjs";
import {OfferState} from "../../../../lib/state/offer.state";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products?: Offer.OfferTypeList[]

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(new InquireOffers({id: 1, name: "internet", description: "Türk Telekom Internet"}))
      .pipe(switchMap(() => this.store.selectOnce(OfferState.offer)))
      .subscribe({
        next: (response) => {
          this.products = response.offerTypeList
        }
      })
  }

  addBasket() {
  }

  continueButton() {
    this.router.navigate(['selectedofferpage']);
  }
}




