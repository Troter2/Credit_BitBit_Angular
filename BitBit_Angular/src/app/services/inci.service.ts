import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Inci } from '../models/inci';

@Injectable({
  providedIn: 'root'
})
export class InciService {

  private _incis: BehaviorSubject<Inci[]> = new BehaviorSubject<Inci[]>([]);
  private _inci: BehaviorSubject<Inci> = new BehaviorSubject<Inci>(new Inci());
  constructor(private http: HttpClient, private router: Router) { }

  get incis(): Observable<Inci[]> {
    return this._incis.asObservable();
  }
  get inci(): Observable<Inci> {
    return this._inci.asObservable();
  }

  retrieveIncisFromHttp() {

    let size = 0;
    this.incis.pipe(take(1)).subscribe(
      (inciList: Inci[]) => {
        size = inciList.length;
      }
    );
    console.log("enter");
    console.log(localStorage);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/incidencies?limit=10&&offset=3", options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        this._incis.next([]);
        response.body.incidencies.forEach((element) => {
          let inci: Inci = new Inci();
          inci.id_inci = element.id_inci;
          inci.desc = element.desc;
          inci.id_user_propietari = element.id_user_propietari;
          inci.nom_propietari = element.nom_propietari;
          inci.marca = element.marca;
          inci.numero_serie = element.numero_serie;
          inci.tlf = element.tlf;
          inci.desc_averia = element.desc_averia;
          inci.diagnosis_prev = element.diagnosis_prev;
          inci.entry_date = element.entry_date;
          inci.out_date = element.out_date;
          this.incis.pipe(take(1)).subscribe(
            (originalIncis: Inci[]) => {
              this._incis.next(originalIncis.concat(inci));
            }
          )
        }
        )
      }
    )
  }

  renewToken(token) {
    let group = JSON.parse(localStorage.getItem("USER_DATA"))
    let infouser = {
      'token': token,
      'group': group['group']
    }
    console.log(infouser)
    localStorage.setItem("USER_DATA", JSON.stringify(infouser));
  }
}
