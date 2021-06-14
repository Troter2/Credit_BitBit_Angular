import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Inci } from 'src/app/models/inci';
import { InciService } from 'src/app/services/inci.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inci-detail',
  templateUrl: './inci-detail.page.html',
  styleUrls: ['./inci-detail.page.scss'],
})
export class InciDetailPage implements OnInit {

  public inci: Inci;
  private id: number;
  constructor(private router: Router, private activateRoute: ActivatedRoute,private loginService:LoginService, private InciService: InciService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null || this.loginService.user.group != 'user') {
          this.router.navigate(["/home"])
        } else {
          this.id = Number(params['id']);
          this.InciService.retrieveInciFromHttp(this.id);
          this.InciService.inci.subscribe(
            (data_inci: Inci) => {
              this.inci = data_inci;
            }
          )
        }
      }
    );
  
  }
  ngOnInit() {
  }

}
