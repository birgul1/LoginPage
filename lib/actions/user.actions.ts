import {User} from "../models/user";

export class LoginComponent {
  static readonly type = '[User] LoginComponent ';
  constructor(public name: string) {}
}
export class InquireUserTypes {
  static readonly type = '[User] UserTypeList';
  constructor(public payload: User.InquireUserRequest) {}
}
export class CreateUser {
  static readonly type = '[User] CreateUser';
  constructor(public payload: CreateUser) {
  }
}
export class GetUserInfo{
    static readonly type='[User] GetUser';
    constructor() {
    }

}
