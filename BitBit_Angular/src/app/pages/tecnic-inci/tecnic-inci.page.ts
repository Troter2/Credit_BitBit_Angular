import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Inci } from 'src/app/models/inci';
import { Tasca } from 'src/app/models/tasca';
import { InciService } from 'src/app/services/inci.service';
import { LoginService } from 'src/app/services/login.service';
import { TascaService } from 'src/app/services/tasca.service';


@Component({
  selector: 'app-tecnic-inci',
  templateUrl: './tecnic-inci.page.html',
  styleUrls: ['./tecnic-inci.page.scss'],
})
export class TecnicInciPage implements OnInit {
  public searchTasca: string="";
  public tasques: Tasca[] = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute,private TascaService : TascaService, private loginService:LoginService) { 
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        console.log('loginService test')
        if (this.loginService.user.token == '') {
          this.router.navigate(["/home"])
        } else {

        }
      }
    );
    this.TascaService.retrieveTasquesFromHttp();
    this.TascaService.tasques.subscribe(
      (TasquesList: Tasca[]) => {
        this.tasques = TasquesList;
        console.log('=======================')
        console.log(TasquesList)
        console.log('========TASCA===============')
      console.log(this.tasques)
      }
      )
      
  }

  view_tasca(id) {
    this.router.navigate(['/tasca-detail', id]);
  }

  filterTasca(tasca : Tasca){
    if(this.searchTasca == "") return true;
    if(this.searchTasca == tasca.marca) return true;
    else return false;
  }


  ngOnInit() {
  }

}
