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


  retrieveInciFromHttp(id: number) {
    var data_inci: Inci = new Inci();
    this.inci.pipe(take(1)).subscribe(
    );
    console.log(data_inci);
    let token = JSON.parse(localStorage.getItem("USER_DATA"));   //AQUI ESTA EL ERROR
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['token'] }),
      observe: 'response' as 'response'
    }
    this.http.get("http://localhost/Credit_BitBit_PHP/privateApi/incidencies?id=" + id, options).subscribe(
      (response: any) => {
        this.renewToken(response.body.token);
        data_inci.id_inci = response.body.incidencia.id_inci;
        data_inci.id_user_propietari = response.body.incidencia.id_user_propietari;
        data_inci.nom_propietari = response.body.incidencia.nom_propietari;
        data_inci.marca = response.body.incidencia.marca;
        data_inci.numero_serie = response.body.incidencia.numero_serie;
        data_inci.desc_averia = response.body.incidencia.desc_averia;
        data_inci.marca = response.body.incidencia.marca;
        data_inci.desc = response.body.incidencia.desc;
        data_inci.tlf = response.body.incidencia.tlf;
        data_inci.out_date = response.body.incidencia.out_date;
        data_inci.entry_date = response.body.incidencia.entry_date;
        data_inci.uuid = response.body.incidencia.uuid;

        console.log(data_inci);
        this.inci.pipe(take(1)).subscribe(
          (originalMail: Inci) => {
            originalMail[id] = this.inci;
            this._inci.next(originalMail);
          }
        );
        this._inci.next(data_inci);
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
