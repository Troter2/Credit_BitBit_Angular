import { HttpClient } from '@angular/common/http';
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
    let token = JSON.parse(localStorage.getItem("USER_DATA"));
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/mail?token=" + token['token']).subscribe(
      (response: any[]) => {
        console.log(response)
        if (response.length == size) {
          // console.log("first input");
          return;
        }
        else this._mails.next([]);
        console.log("mails1");
        response.forEach((element) => {
          console.log("mails");
          let mail: Mail = new Mail();
          mail.from = element.mails.from;
          mail.to = element.mails.to;
          mail.about = element.mails.about;
          mail.content = element.mails.content;
          mail.id = element.mails.id_msg;

          console.log(element)
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
      let token = JSON.parse(localStorage.getItem("USER_DATA"));
      console.log('response ' + "http://localhost/Credit_BitBit_PHP/privateApi/mail?id=" + id + "&&token=" + token['token'])
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/mail?id=" + id + "&&token=" + token['token']).subscribe(
      (response: any) => {
        data_mail.id = response.id_msg;
        data_mail.from = response.from;
        data_mail.to = response.to;
        data_mail.about = response.about;
        data_mail.content = response.content;
        console.log(data_mail);
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
}
