import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  logout(){
    this.loginService.logout();
  }

  gohome(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    
  }

}
