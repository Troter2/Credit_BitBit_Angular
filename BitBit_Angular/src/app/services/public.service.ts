import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { New } from '../models/new';
import { LoginService } from './login.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private _news: BehaviorSubject<New[]> = new BehaviorSubject([])

  constructor(private http: HttpClient, private login: LoginService) { }

  get news(): Observable<New[]> {
    return this._news.asObservable();
  }

  retrieveNewsFromHttp() {
    let size = 0;
    this.news.pipe(take(1)).subscribe(
      (newsList: New[]) => {
        size = newsList.length;
      }
    );
    console.log("enter");

    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/news").subscribe(
      (response: any[]) => {
        console.log(response)
        if (response.length == size) {
          // console.log("first input");
          return;
        }
        else this._news.next([]);
        response.forEach((element) => {
          console.log("news");
          let news: New = new New();
          news.title = element.title;
          news.content = element.content;
          news.image = element.image;
          news.date = element.date;

          this.news.pipe(take(1)).subscribe(
            (originalNews: New[]) => {
              this._news.next(originalNews.concat(news));
            }
          )
        }
        )
      }
    )
  }
}
