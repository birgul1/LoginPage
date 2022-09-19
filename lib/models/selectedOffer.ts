import {StoreOptions} from "@ngxs/store/src/symbols";
import {Offer} from "./offer";

export namespace SelectedOffer {
  export const NAME = 'SelectedOfferState';
  export const DEFAULTS = {
    selectedOfferData: {} as SelectedOfferResponse,
    result: null
  } as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;
  export interface State {
    selectedOfferData: SelectedOfferResponse;
    result:any;
  }
  export interface CreateSelectedOfferResponse{
    offerTypeList: OfferTypeList;
  }

  export interface OfferTypeList{
    id?: number;
    name?: string;
    description?: string;
    status?: string;
    creationDate?: string;
  }
  export interface  OfferCharTypeList{
    charValueId: number,
    name:string,
    description:string,
    selectedValue:number
  }

  export interface List {
    offerTypeList: Offer.OfferTypeList[];
    offerCharTypeList: OfferCharTypeList[];
  }

  export interface  SelectedOfferResponse{
    offerCharList: List[];
    returnCode: string;
    returnMessage: string;
  }
}
