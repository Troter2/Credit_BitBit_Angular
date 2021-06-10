import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { InfoUser } from 'src/app/models/info-user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPage implements OnInit {

  public infoUser: InfoUser;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private loginService: LoginService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        console.log('loginService test')
        if (this.loginService.user.token == '') {
          this.router.navigate(["/home"])
        } else {
          this.loginService.retrieveUserFromHttp();
          this.loginService.infoUser.subscribe(
            (data_user: InfoUser) => {
              console.log("AQUI")
              this.infoUser = data_user;
              console.log(this.infoUser)
            }
          )
        }
      }
    );

  }
  ngOnInit() {
  }

}
