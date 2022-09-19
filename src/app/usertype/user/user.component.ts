import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {InquireOffers} from "../../../../lib/actions/offer.actions";
import {switchMap} from "rxjs";
import {OfferState} from "../../../../lib/state/offer.state";
import {Offer} from "../../../../lib/models/offer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  title="Product List"
  products?:Offer.OfferTypeList[]
  basket:Offer.OfferTypeList[]=[]

  constructor(private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.store.dispatch(new InquireOffers({id:1, name:"internet", description:"Türk Telekom Internet"}))
      .pipe(switchMap(()=>this.store.selectOnce(OfferState.offer)))
      .subscribe({
        next:(response)=>{

          this.products=response.offerTypeList
          console.log(this.products)
        }
      })

    /*this.store.selectSnapshot((InquireOffers)=>state({id:1, name:"internet", description:"Türk Telekom Internet"}).)*/


    /*this.store.selectSnapshot(InquireOffers);*/
     /*inquireOffers apisi çağıralacak
      request(params) olarak userId gönderilecek
      userId inquireUserTypes apisinden alınacak(selectSnapshot ile okunabilir)
      api çağırımını subscribe olup, dönen response product değişkenine atılacak.
    */
  }
  addBasket(product: any){
    this.basket.push(product);
  }



  continueButton(){
    this.router.navigate(['selectedofferpage']);
  }







}
