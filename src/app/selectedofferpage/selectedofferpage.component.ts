import { Component, OnInit } from '@angular/core';
import {Offer} from "../../../lib/models/offer";
import {InquireOffers} from "../../../lib/actions/offer.actions";
import {switchMap} from "rxjs";
import {OfferState} from "../../../lib/state/offer.state";
import {Store} from "@ngxs/store";
import {SelectedOffer} from "../../../lib/models/selectedOffer";
import {ContinueSelectedOffer} from "../../../lib/actions/selectedOffer.action";

@Component({
  selector: 'app-selectedofferpage',
  templateUrl: './selectedofferpage.component.html',
  styleUrls: ['./selectedofferpage.component.css']
})
export class SelectedofferpageComponent implements OnInit {
  title="Selected Offer Page"
  selectedProduct?:SelectedOffer.OfferTypeList[]


  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new ContinueSelectedOffer({id:1,name:"aasjsah",description:"sadmkd sddskskksks",status:"active",creatonDate:"23.12.2012"}))
      .pipe(switchMap(()=>this.store.selectOnce(OfferState.offer)))
      .subscribe({
        next: (response) => {

          this.selectedProduct = response.offerTypeList

        }
      })
  }
}
