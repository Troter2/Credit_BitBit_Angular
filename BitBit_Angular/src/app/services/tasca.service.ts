import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Tasca } from '../models/tasca';

@Injectable({
  providedIn: 'root'
})
export class TascaService {
  private _tasques: BehaviorSubject<Tasca[]> = new BehaviorSubject<Tasca[]>([]);
  private _tasca: BehaviorSubject<Tasca> = new BehaviorSubject<Tasca>(new Tasca());
  constructor(private http: HttpClient, private router: Router) { }
  get tasques(): Observable<Tasca[]> {
    return this._tasques.asObservable();
  }
  get tasca(): Observable<Tasca> {
    return this._tasca.asObservable();
  }

  retrieveTasquesFromHttp() {

    let size = 0;
    this.tasques.pipe(take(1)).subscribe(
      (TasquesList: Tasca[]) => {
        size = TasquesList.length;
      }
    );
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/tasques?limit=10&&offset=3", options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        this._tasques.next([]);
        response.body.tasques.forEach((element) => {
          let tasca: Tasca = new Tasca();
          tasca.id_inci = element.id_inci;
          tasca.id_tasca = element.id_tasca;
          tasca.desc = element.desc;
          tasca.id_user = element.id_user;
          tasca.status = element.status;
          tasca.marca = element.marca;
          tasca.accions = element.accions;
          tasca.start_date = element.start_date;
          tasca.end_date = element.end_date;
          tasca.canvas = element.canvas;
          this.tasques.pipe(take(1)).subscribe(
            (originalTasques: Tasca[]) => {
              this._tasques.next(originalTasques.concat(tasca));
            }
          )
        }
        )
      }
    )
  }



  retrieveTascaFromHttp(id: number) {
    var detail_tasca: Tasca = new Tasca();
    this.tasca.pipe(take(1)).subscribe(
    );
    console.log(detail_tasca);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/tasques?id=" + id, options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        detail_tasca.id_inci = response.body.token.id_inci;
        detail_tasca.id_tasca = response.body.token.id_tasca;
        detail_tasca.desc = response.body.token.desc;
        detail_tasca.id_user = response.body.token.id_user;
        detail_tasca.status = response.body.token.status;
        detail_tasca.marca = response.body.token.marca;
        detail_tasca.accions = response.body.token.accions;
        detail_tasca.start_date = response.body.token.start_date;
        detail_tasca.end_date = response.body.token.end_date;
        detail_tasca.canvas = response.body.token.canvas;
        console.log(detail_tasca);
        this.tasca.pipe(take(1)).subscribe(
          (originalMail: Tasca) => {
            originalMail[id] = this.tasca;
            this._tasca.next(originalMail);
          }
        );
        this._tasca.next(detail_tasca);
      }
    )

  }


  renewToken(token) {
    let group = JSON.parse(localStorage.getItem("USER_DATA"))
    let infouser = {
      'token': token,
      'group': group['group']
    }
    localStorage.setItem("USER_DATA", JSON.stringify(infouser));
  }
}
