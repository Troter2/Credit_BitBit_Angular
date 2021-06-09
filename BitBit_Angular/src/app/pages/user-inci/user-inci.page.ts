import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Inci } from 'src/app/models/inci';
import { InciService } from 'src/app/services/inci.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-inci',
  templateUrl: './user-inci.page.html',
  styleUrls: ['./user-inci.page.scss'],
})
export class UserInciPage implements OnInit {

  public incis: Inci[] = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute,private InciService : InciService, private loginService:LoginService) { 
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        console.log('loginService test')
        if (this.loginService.user.token == '') {
          this.router.navigate(["/home"])
        } else {

        }
      }
    );
    this.InciService.retrieveIncisFromHttp();
    this.InciService.incis.subscribe(
      (inciList: Inci[]) => {
        this.incis = inciList;
      }
    )
    console.log(this.incis)
  }

  view_inci(id) {
    this.router.navigate(['/inci-detail', id]);
  }

  ngOnInit() {
  }

}
