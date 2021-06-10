import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InfoUser } from 'src/app/models/info-user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  public infoUser: InfoUser;
  public username: string = "";
  public email: string = "";
  public first_name: string = "";
  public last_name: string = "";
  public company: string = "";
  public tlf: string = "";
  public city: string = "";
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

  updateUser() {
    this.username = this.infoUser.username
    this.email = this.infoUser.email
    this.first_name = this.infoUser.first_name
    this.last_name = this.infoUser.last_name
    this.company = this.infoUser.company
    this.tlf = this.infoUser.phone
    this.city = this.infoUser.city
    this.loginService.updateUserToHttp(this.username,this.email,this.first_name,this.last_name,this.company,this.tlf,this.city);
  }
  ngOnInit() {
  }

}
