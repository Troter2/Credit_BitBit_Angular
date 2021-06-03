import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { New } from '../models/new';
import { LoginService } from './login.service';
import { take } from 'rxjs/operators';
import { About } from '../models/about';
import { TipusConsulta } from '../models/tipus-consulta';
import { Consulta } from '../models/consulta';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private _news: BehaviorSubject<New[]> = new BehaviorSubject([])
  private _about: BehaviorSubject<About[]> = new BehaviorSubject([])
  private _tipusConsulta: BehaviorSubject<TipusConsulta[]> = new BehaviorSubject([])

  constructor(private http: HttpClient, private login: LoginService, private router: Router) { }

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

  get about(): Observable<About[]> {
    return this._about.asObservable();
  }

  retrieveAboutFromHttp() {
    let size = 0;
    this.about.pipe(take(1)).subscribe(
      (aboutList: About[]) => {
        size = aboutList.length;
      }
    );
    console.log("enter");

    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/about").subscribe(
      (response: any[]) => {
        console.log(response)
        if (response.length == size) {
          // console.log("first input");
          return;
        }
        else this._about.next([]);
        response.forEach((element) => {
          console.log("About");
          let about: About = new About();
          about.content = element.content;
          about.titol = element.titol;
          about.date = element.date;


          this.about.pipe(take(1)).subscribe(
            (originalAbout: About[]) => {
              this._about.next(originalAbout.concat(about));
            }
          )
        }
        )
      }
    )
  }


  addConsultaToHttp(consulta: Consulta) {
    let dataConsulta = {
      id_consulta: consulta.id_consulta,
      content: consulta.content,
      nom: consulta.nom,
      email: consulta.email,
      assumpte: consulta.assumpte
    }
    console.log(dataConsulta);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'response'
    }
    this.http.post('http://localhost/Credit_BitBit_PHP/privateApi/consulta', dataConsulta, options).subscribe(
      (response:any)=>{
        this.router.navigate(['/home'])
      }, 
      (error:any)=>{
        // alert("error pallaso")
      } 
    )
  }





  get tipusConsulta(): Observable<TipusConsulta[]> {
    return this._tipusConsulta.asObservable();
  }

  retrieveTipusConsultaFromHttp() {
    let size = 0;
    this.tipusConsulta.pipe(take(1)).subscribe(
      (tipusConsultaList: TipusConsulta[]) => {
        size = tipusConsultaList.length;
      }
    );
    console.log("enter");

    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/tipusConsulta").subscribe(
      (response: any[]) => {
        console.log(response)
        if (response.length == size) {
          // console.log("first input");
          return;
        }
        else this._tipusConsulta.next([]);
        response.forEach((element) => {
          console.log("tipus");
          let tipus: TipusConsulta = new TipusConsulta();
          tipus.id = element.id;
          tipus.consulta = element.consulta;


          this.tipusConsulta.pipe(take(1)).subscribe(
            (originatipus: TipusConsulta[]) => {
              this._tipusConsulta.next(originatipus.concat(tipus));
            }
          )
        }
        )
      }
    )
  }
}
