import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Inci } from 'src/app/models/inci';
import { InciService } from 'src/app/services/inci.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-tecnic-inci',
  templateUrl: './tecnic-inci.page.html',
  styleUrls: ['./tecnic-inci.page.scss'],
})
export class TecnicInciPage implements OnInit {
  public searchInci: string="";
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

  filterInci(inci : Inci){
    if(this.searchInci == "") return true;
    if(this.searchInci == inci.desc) return true;
    else return false;
  }


  ngOnInit() {
  }

}
