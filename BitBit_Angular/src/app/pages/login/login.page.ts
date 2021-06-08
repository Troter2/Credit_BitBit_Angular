import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string = "";
  public pass: string = "";
  public ErrorLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }
  login() {
    this.loginService.login(this.user, this.pass).subscribe(
      (response: any) => {
        let user: User = new User();
        console.log(response.body.token)
        user.token = response.body.token;
        this.loginService.user = user;
        this.ErrorLogin = false;
        this.router.navigate(['/home']);
      },
      (error: any) => {
        this.loginService.logout();
        this.ErrorLogin = true;
      }
    )
  }

  ngOnInit() {
  }


}
