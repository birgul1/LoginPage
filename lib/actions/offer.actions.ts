import {Offer} from "../models/offer";

export class BasketComponent{
static readonly type='[Basket] BasketComponent';
constructor(public payload:number) {}
}
export class CreateOffer {
  static readonly  type = '[Offer] CreateOffer';
  constructor(public payload: Offer.CreateOfferRequest) {}
}
 export class InquireOffers{
  static readonly type='[Offer] OfferTypeList';

   constructor(public payload: { name: string; description: string; id: number }) {
  }
 }
export class GetOfferInfo {
  static readonly  type = '[Offer] GetOffer';
  constructor() {}
}
