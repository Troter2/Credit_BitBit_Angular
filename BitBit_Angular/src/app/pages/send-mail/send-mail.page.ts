import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Mail } from 'src/app/models/mail';
import { LoginService } from 'src/app/services/login.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.page.html',
  styleUrls: ['./send-mail.page.scss'],
})
export class SendMailPage implements OnInit {

  public to: string = "";
  public assumpte: string = "";
  public content: string = "";

  constructor(private mailService: MailService, private activateRoute: ActivatedRoute, private loginService: LoginService, private router: Router) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (this.loginService.user.group == null) {
          this.router.navigate(["/home"])
        } else {
        }
      }
    );
  }

  sendMail() {
    let mail: Mail = new Mail();
    mail.to = this.to;
    mail.about = this.assumpte;
    mail.content = this.content;
    console.log(mail);
    this.mailService.addMailToHttp(mail);
  }

  ngOnInit() {
  }

}
