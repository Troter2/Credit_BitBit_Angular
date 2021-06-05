import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { PublicService } from 'src/app/services/public.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public news: New[] = [];
  constructor(private publicService: PublicService, private router: Router) {

    this.publicService.retrieveNewsFromHttp();
    this.publicService.news.subscribe(
      (newsList: New[]) => {
        this.news = newsList;
      }
    )
  }

  details(id){
    this.router.navigate(['/news-detail', id]);
  }


  ngOnInit() {
  }
}
