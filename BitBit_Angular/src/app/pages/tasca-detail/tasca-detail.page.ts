import { Component, OnInit } from '@angular/core';
import { Tasca } from 'src/app/models/tasca';
import { TascaService } from 'src/app/services/tasca.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-tasca-detail',
  templateUrl: './tasca-detail.page.html',
  styleUrls: ['./tasca-detail.page.scss'],
})
export class TascaDetailPage implements OnInit {

  public tasca: Tasca;
  private id: number;
  private id_tasca: number;
  public status: string = "";
  public descripcio: string = "";
  public accions: string = "";
  constructor(private router: Router, private activateRoute: ActivatedRoute, private TascaService: TascaService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null) {
          this.router.navigate(["/home"])
        } else {
          this.id = Number(params['id']);
          this.TascaService.retrieveTascaFromHttp(this.id);
          this.TascaService.tasca.subscribe(
            (detail_tasca: Tasca) => {
              this.tasca = detail_tasca;
            }
          )
        }
      }
    );
  }

  updateTask() {
    this.status = this.tasca.status
    this.id_tasca = this.tasca.id_tasca
    this.descripcio = this.tasca.desc
    this.accions = this.tasca.accions
    this.TascaService.updateTaskFromHttp(this.id_tasca,this.status,this.descripcio,this.accions);
  }
  

  
  ngOnInit() {
  }

}
