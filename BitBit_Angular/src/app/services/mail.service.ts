import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private _mails: BehaviorSubject<Mail[]> = new BehaviorSubject<Mail[]>([]);
  private _mail: BehaviorSubject<Mail> = new BehaviorSubject<Mail>(new Mail());

  constructor(private http: HttpClient, private router: Router) { }

  get mails(): Observable<Mail[]> {
    return this._mails.asObservable();
  }
  get mail(): Observable<Mail> {
    return this._mail.asObservable();
  }

  retrieveMailsFromHttp() {

    let size = 0;
    this.mails.pipe(take(1)).subscribe(
      (mailList: Mail[]) => {
        size = mailList.length;
      }
    );
    console.log("enter");
    console.log(localStorage);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/mail", options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        this._mails.next([]);
        response.body.mails.forEach((element) => {
          let mail: Mail = new Mail();
          mail.from = element.from;
          mail.to = element.to;
          mail.about = element.about;
          mail.content = element.content;
          mail.id = element.id_msg;
          this.mails.pipe(take(1)).subscribe(
            (originalMails: Mail[]) => {
              this._mails.next(originalMails.concat(mail));
            }
          )
        }
        )
      }
    )
  }


  retrieveMailFromHttp(id: number) {
    var data_mail: Mail = new Mail();
    this.mail.pipe(take(1)).subscribe(
    );
    console.log(data_mail);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    console.log('response ' + "http://localhost/Credit_BitBit_PHP/privateApi/mail?id=" + id + "&&token=" + token['token'])
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/mail?id=" + id, options).subscribe(
      (response: any) => {
        data_mail.id = response.body.id_msg;
        data_mail.from = response.body.from;
        data_mail.to = response.body.to;
        data_mail.about = response.body.about;
        data_mail.content = response.body.content;
        this.mail.pipe(take(1)).subscribe(
          (originalMail: Mail) => {
            originalMail[id] = this.mail;
            this._mail.next(originalMail);
          }
        );
        this._mail.next(data_mail);
      }
    )

  }

  addMailToHttp(mail: Mail) {
    let dataMail = {
      to: mail.to,
      content: mail.content,
      about: mail.about,
    }
    console.log(dataMail);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'Bearer '+token['token']
      }),
      observe: 'response' as 'response'
    }
    console.log(options)
    this.http.post('http://localhost/Credit_BitBit_PHP/privateApi/mail', dataMail, options).subscribe(
      (response: any) => {
        console.log(response)
        this.renewToken(response.body.token);
        this.router.navigate(['/home'])
      },
      (error: any) => {
        this.router.navigate(['/about'])
      }
    )
  }
  renewToken(token) {
    let infouser = {
      'token': token
    }
    console.log(infouser)
    localStorage.setItem("USER_DATA", JSON.stringify(infouser));
  }
}
