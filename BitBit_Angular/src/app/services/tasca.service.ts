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
  private _maxData: number = 0;
  private _curTask: number = 0;
  private _limitTask: number = 20;

  constructor(private http: HttpClient, private router: Router) { }
  get tasques(): Observable<Tasca[]> {
    return this._tasques.asObservable();
  }
  get tasca(): Observable<Tasca> {
    return this._tasca.asObservable();
  }

  get maxData(): number {
    return this._maxData
  }

  set maxData(number) {
    this._maxData = number;
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
    this.http.get('http://localhost/Credit_BitBit_PHP/privateApi/tasques?limit=' + this._limitTask + '&&offset=' + this._curTask, options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        this.maxData=response.body.amount;
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
    this._curTask = this._curTask + this._limitTask;
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
        detail_tasca.id_inci = response.body.tasca.id_inci;
        detail_tasca.id_tasca = response.body.tasca.id_tasca;
        detail_tasca.desc = response.body.tasca.desc;
        detail_tasca.id_user = response.body.tasca.id_user;
        detail_tasca.status = response.body.tasca.status;
        detail_tasca.marca = response.body.tasca.marca;
        detail_tasca.accions = response.body.tasca.accions;
        detail_tasca.start_date = response.body.tasca.start_date;
        detail_tasca.end_date = response.body.tasca.end_date;
        detail_tasca.canvas = response.body.tasca.canvas;
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

  endTask(): boolean {
    return this._curTask >= this.maxData;
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
