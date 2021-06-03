import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public about: About[] = [];
  constructor(private publicService: PublicService, private router: Router) {

    this.publicService.retrieveAboutFromHttp();
    this.publicService.about.subscribe(
      (aboutList: About[]) => {
        this.about = aboutList;
      }
    )
  }
  ngOnInit() {
  }
}
