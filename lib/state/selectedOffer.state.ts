import {Action, Selector, State, StateContext} from "@ngxs/store";
import {SelectedOffer} from "../models/selectedOffer";
import {Injectable} from "@angular/core";
import {ContinueSelectedOffer} from "../actions/selectedOffer.action";
import {tap} from "rxjs/operators";
import {SelectedOfferService} from "../services/selectedoffer.service";


@State<SelectedOffer.State>(SelectedOffer.OPTIONS)
@Injectable()

export class SelectedOfferState {
  constructor(private selectedOfferService: SelectedOfferService) {
  }

  @Selector()
  static selectedOffer({selectedOfferData}: SelectedOffer.State): SelectedOffer.SelectedOfferResponse {
    return selectedOfferData;
  }

  @Action(ContinueSelectedOffer)
  continueSelectedOffer(
    {patchState}: StateContext<SelectedOffer.State>,
    payload: number) {
    return this.selectedOfferService.continueSelectedOffer('continueSelectedOfer', payload).pipe(
      tap(response => {
        patchState({selectedOfferData: response})
      })
    )
  }
}
