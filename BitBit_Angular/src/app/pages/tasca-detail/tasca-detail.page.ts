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
  

  
  ngOnInit() {
  }

}
