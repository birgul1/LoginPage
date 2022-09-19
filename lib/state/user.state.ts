import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {InquireUserTypes} from "../actions/user.actions";
import { tap } from 'rxjs/operators';
import {UserService} from "../services";




@State<User.State>(User.OPTIONS)
@Injectable()

export class UserState {
  constructor(private userService: UserService) {
  }

  @Selector()
  static user({inquireUserData}: User.State): User.InquireUserResponse {
    console.log(inquireUserData)
    return inquireUserData;
  }

  @Action(InquireUserTypes)
  inquireUser(
    {patchState}: StateContext<User.State>,
    {payload}: InquireUserTypes) {
    return this.userService.inquireUserTypes('inquireUser', payload).pipe(
      tap(response => {
          patchState({
            inquireUserData: response,
          })
        }
      ),
    );

  }
}



