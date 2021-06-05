import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from 'src/app/models/mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-list-mail',
  templateUrl: './list-mail.page.html',
  styleUrls: ['./list-mail.page.scss'],
})
export class ListMailPage implements OnInit {
  public mails: Mail[] = [];
  constructor(private mailService: MailService, private router: Router) {

    this.mailService.retrieveMailsFromHttp();
    this.mailService.mails.subscribe(
      (mailList: Mail[]) => {
        this.mails = mailList;
      }
    )
  }
  ngOnInit() {
  }
}
