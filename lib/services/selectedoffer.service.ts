import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SelectedOffer} from "../models/selectedOffer";

@Injectable({
  providedIn: 'root'
})
export class SelectedOfferService {
  constructor(private http: HttpClient) {
  }

  continueSelectedOffer(params: string, payload: number): Observable<{ offerCharList: { offerTypeList: ({ name: string; description: string; id: number; creationDate: string; status: string } | { name: string; description: string; id: number; creationDate: string; status: string } | { name: string; description: string; id: number; creationDate: string; status: string } | { name: string; description: string; id: number; creationDate: string; status: string })[]; offerCharTypeList: { charValueId: number; name: string; description: string; selectedValue: number }[] }[]; returnCode: string; returnMessage: string }> {
    return of({
      offerCharList:
        [{
          offerTypeList: [
            {
              id: 1,
              name: "Tv",
              description: "Samsung Televizyon, LED Ekran",
              status: "active",
              creationDate: "02.03.2020",

            }

          ],
          offerCharTypeList: [
            {
              charValueId: 111,
              name: "phone",
              description: "samsung xxx xxx xxxx",
              selectedValue: 5454
            },
          ],
        }],
      returnCode: "succes",
      returnMessage: "success"
    });

      //return selectedOfferData$;

  }
}
