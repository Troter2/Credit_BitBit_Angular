import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Inci } from 'src/app/models/inci';
import { InciService } from 'src/app/services/inci.service';

@Component({
  selector: 'app-inci-detail',
  templateUrl: './inci-detail.page.html',
  styleUrls: ['./inci-detail.page.scss'],
})
export class InciDetailPage implements OnInit {

  public inci: Inci;
  private id: number;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private MailService: InciService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null) {
          this.router.navigate(["/home"])
        } else {
          this.id = Number(params['id']);
          this.MailService.retrieveInciFromHttp(this.id);
          this.MailService.inci.subscribe(
            (data_inci: Inci) => {
              this.inci = data_inci;
              console.log(this.inci);
            }
          )
        }
      }
    );
  
  }
  ngOnInit() {
  }

}
