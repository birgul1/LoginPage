import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Offer} from "../models/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  inquireOffers(params:string, payload:number):Observable<Offer.InquireOffersResponse>{
    const offerData$ = of({
      offerTypeList:
        [
        {
          id:1,
          name:"Tv",
          description:"Samsung Televizyon, LED Ekran",
          status:"active",
          creationDate:"02.03.2020",
        },
        {
          id:2,
          name:"İnternet",
          description: "Türk Telekom İnternet",
          status:"active",
          creationDate:"02.03.2020",
        },
        {
          id:3,
          name:"Mobil Hat",
          description: "Türk Telekom",
          status:"pasive",
          creationDate:"02.03.2020",
        },
        {
          id:4,
          name:"Samsung Telephone",
          description: "A23",
          status:"active",
          creationDate:"02.04.2020",
        },


      ],
    returnCode:"succes",
    returnMessage: "success"
    });
    return offerData$;
  }
  }




