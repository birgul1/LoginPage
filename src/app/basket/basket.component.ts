import { Component, OnInit } from '@angular/core';
import {Offer} from "../../../lib/models/offer";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }
  title="Basket";
  products?:Offer.OfferTypeList[]


  ngOnInit(): void {
  }



}
