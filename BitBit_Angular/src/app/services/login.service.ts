import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { InfoUser } from '../models/info-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _infoUser: BehaviorSubject<InfoUser> = new BehaviorSubject<InfoUser>(new InfoUser());

  constructor(private http: HttpClient) { }

  set user(user: User) {
    let userdata = {
      'token': user.token,
      'group': user.group
    }
    localStorage.setItem("USER_DATA", JSON.stringify(userdata));
  }


  get user(): User {
    let userStr = localStorage.getItem("USER_DATA");
    let user = new User();
    if (userStr != null) {
      let userObj = JSON.parse(userStr);
      user.token = userObj.token;
      user.group = userObj.group;
    }
    return user;
  }
  get infoUser(): Observable<InfoUser> {
    return this._infoUser.asObservable();
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

  // retrieveUserFromHttp() {
  //   var data_user: InfoUser = new InfoUser();
  //   this.infoUser.pipe(take(1)).subscribe(
  //   );
  //   let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
  //   let options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
  //     observe: 'response' as 'response'
  //   }
  //   this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/getUser", options).subscribe(
  //     (response: any) => {
  //       console.log(response)
  //       this.renewToken(response.body.token);
  //       data_user.company = response.body.user.company;
  //       data_user.email = response.body.user.email;
  //       data_user.first_name = response.body.user.first_name;
  //       data_user.last_name = response.body.user.last_name;
  //       data_user.tlf = response.body.user.tlf;
  //       data_user.city = response.body.user.city;
  //       data_user.username = response.body.user.username;
  //       this.infoUser.pipe(take(1)).subscribe(
  //         (originalUser: InfoUser) => {
  //           originalUser = this.infoUser;
  //           this._infoUser.next(originalUser);
  //         }
  //       );
  //       console.log(response.body.user.username);
  //     }
  //   )
  //   console.log('data_user');
  //   console.log(data_user);

  // }

  renewToken(token) {
    let infouser = {
      'token': token
    }
    console.log(infouser)
    localStorage.setItem("USER_DATA", JSON.stringify(infouser));
  }


}

