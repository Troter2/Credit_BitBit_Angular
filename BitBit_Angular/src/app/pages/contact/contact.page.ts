import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { TipusConsulta } from 'src/app/models/tipus-consulta';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  public nom: string = "";
  public email: string = "";
  public assumpte: string = "";
  public content: string = "";
  public id_consulta: number;


  public tipusConsulta: TipusConsulta[] = [];
  constructor(private publicService: PublicService, private router: Router) {

    this.publicService.retrieveTipusConsultaFromHttp();
    this.publicService.tipusConsulta.subscribe(
      (tipusConsultaList: TipusConsulta[]) => {
        this.tipusConsulta = tipusConsultaList;
      }
    )
    console.log(this.tipusConsulta)
  }
  ngOnInit() {
  }

  addConsulta() {
    let consulta: Consulta = new Consulta();
    consulta.assumpte = this.assumpte;
    consulta.email = this.email;
    consulta.nom = this.nom;
    consulta.id_consulta = this.id_consulta;
    consulta.content = this.content;
    console.log(consulta);
    this.publicService.addConsultaToHttp(consulta);
  }
}
