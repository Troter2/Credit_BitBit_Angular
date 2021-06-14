import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mail } from 'src/app/models/mail';
import { LoginService } from 'src/app/services/login.service';
import { MailService } from 'src/app/services/mail.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.page.html',
  styleUrls: ['./mail-detail.page.scss'],
})
export class MailDetailPage implements OnInit {
  public mail: Mail;
  private id: number;
  constructor(private router: Router, private activateRoute: ActivatedRoute,private loginService:LoginService, private MailService: MailService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null || this.loginService.user.group != null) {
          this.router.navigate(["/home"])
        } else {
          this.id = Number(params['id']);
          this.MailService.retrieveMailFromHttp(this.id);
          this.MailService.mail.subscribe(
            (data_mail: Mail) => {
              this.mail = data_mail;
            }
          )
        }
      }
    );
  
  }


  
  ngOnInit() {
  }

}
