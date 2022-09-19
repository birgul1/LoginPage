import {SelectedOffer} from "../models/selectedOffer";

export class SelectedOfferPageComponent{
  static readonly type='[SelectedOffer] SelectedOfferPageComponent';
  constructor(public payload:number) {}
}
export class CreateSelectedOffer {
  static readonly  type = '[SelectedOffer] CreateSelectedOffer';
  constructor(public payload: SelectedOffer.CreateSelectedOfferResponse) {}
}
export class ContinueSelectedOffer{
  static readonly type='[SelectedOffer] ContinueSelectedOffer'
  constructor(public payload: {id: number; name: string; description: string; status:string; creatonDate:string}) {
  }
}
