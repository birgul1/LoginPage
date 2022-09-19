import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Offer} from "../models/offer";
import {InquireOffers} from "../actions/offer.actions";
import {tap} from "rxjs/operators";
import {OfferService} from "../services/offer.service";


@State<Offer.State>(Offer.OPTIONS)
@Injectable()

export class OfferState{
  constructor(private offerService:OfferService){
  }
  @Selector()
  static offer({inquireOfferData}:Offer.State):Offer.InquireOffersResponse{
    return inquireOfferData;
  }
  @Action(InquireOffers)
  inquireOffer(
    {patchState}:StateContext<Offer.State>,
    payload:number){
    return this.offerService.inquireOffers('inquireOffer', payload).pipe(

    tap(response=> {
        patchState({
        inquireOfferData:response,
      })
    }
    ),
  );
}
}
