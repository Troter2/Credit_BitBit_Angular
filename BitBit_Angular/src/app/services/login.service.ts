import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  set user(user: User) {
    let userdata = {
      'token': user.token
    }
    localStorage.setItem("USER_DATA", JSON.stringify(userdata));
  }

  get user(): User {
    let userStr = localStorage.getItem("USER_DATA");
    let user = new User();
    if (userStr != null) {
      let userObj = JSON.parse(userStr);
      user.token = userObj.token;
    }
    return user;
  }


  login(username: string, password: string) {
    let userdata = {
      user: username,
      pass: password
    }
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    }

    return this.http.post('http://localhost/Credit_BitBit_PHP/privateApi/login', userdata, options);
  }
  logout() {

  }
}

