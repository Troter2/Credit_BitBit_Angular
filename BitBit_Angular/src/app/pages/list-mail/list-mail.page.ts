import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Mail } from 'src/app/models/mail';
import { LoginService } from 'src/app/services/login.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-list-mail',
  templateUrl: './list-mail.page.html',
  styleUrls: ['./list-mail.page.scss'],
})
export class ListMailPage implements OnInit {
  public mails: Mail[] = [];
  constructor(private mailService: MailService, private router: Router, private loginService: LoginService, private activateRoute: ActivatedRoute) {

    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        console.log('loginService test')
        if (this.loginService.user.token == '') {
          this.router.navigate(["/home"])
        } else {

        }
      }
    );
    this.mailService.retrieveMailsFromHttp();
    this.mailService.mails.subscribe(
      (mailList: Mail[]) => {
        this.mails = mailList;
      }
    )
    console.log(this.mails)
  }
  view_mail(id) {
    this.router.navigate(['/mail-detail', id]);
  }
  ngOnInit() {
  }
}
