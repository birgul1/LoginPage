import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

 /* configUrl = 'https://jsonplaceholder.typicode.com/posts';*/


  /*getUser() {
    return this.http.get(this.configUrl);
  }*/

/*Apiye çıkamıyor diye burası dönüyor.*/
  inquireUserTypes(params: string, payload: User.InquireUserRequest): Observable<User.InquireUserResponse> {
    //http post çağrısı yap
    const data$ = of({
      userTypeList: {
        userId: 12345,
        name: "Aaaa",
        description: "Abbb",
        shortCode: "fgffgf",
        isActive: "ACTV",
        entityCodeName: "user"
      },
      returnCode: "Success",
      returnMessage: "success"
    });
    return data$;
  }
}

