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
  public searchInci: string = "";
  public incis: Inci[] = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute, private InciService: InciService, private loginService: LoginService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        console.log('loginService test')
        if (this.loginService.user.token == ''|| this.loginService.user.group != 'user') {
          this.router.navigate(["/home"])
        } else {
          this.InciService.retrieveIncisFromHttp();
          this.InciService.incis.subscribe(
            (inciList: Inci[]) => {
              this.incis = inciList;
            }
          )
          console.log(this.incis)
        }
      }
    );
  }

  view_inci(id) {
    this.router.navigate(['/inci-detail', id]);
  }

  filterInci(inci: Inci) {
    if (this.searchInci == "") return true;
    if (inci.marca.toUpperCase().includes(this.searchInci.toUpperCase())) return true;
    if (inci.desc.toUpperCase().includes(this.searchInci.toUpperCase())) return true;
    else return false;
  }

  loadNewData(event) {
    //demanar al service noves dades (de 10 en 10)
    console.log('jejeje')
    if (this.InciService.endInci()) {
      console.log('error true')
      event.target.disabled = true
    } else {
      console.log('error false')
      this.InciService.retrieveIncisFromHttp();
      event.target.complete();
    }
  }

  ngOnInit() {
  }

}
