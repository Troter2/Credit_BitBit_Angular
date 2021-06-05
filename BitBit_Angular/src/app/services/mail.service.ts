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
  private _mail: BehaviorSubject<Mail[]> = new BehaviorSubject([])

  constructor(private http: HttpClient, private router: Router) { }

  get mails(): Observable<Mail[]> {
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

    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/mail").subscribe(
      (response: any[]) => {
        console.log(response)
        if (response.length == size) {
          // console.log("first input");
          return;
        }
        else this._mail.next([]);
        response.forEach((element) => {
          console.log("mails");
          let mail: Mail = new Mail();
          mail.from = element.from;
          mail.to = element.to;
          mail.about = element.about;
          mail.content = element.content;

          this._mail.pipe(take(1)).subscribe(
            (originalMails: Mail[]) => {
              this._mail.next(originalMails.concat(mail));
            }
          )
        }
        )
      }
    )
  }
}
