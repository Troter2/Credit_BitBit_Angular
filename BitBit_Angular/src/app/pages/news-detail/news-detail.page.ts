import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  public news: New[] = [];

  constructor(private publicService: PublicService, private router: Router) {

    this.publicService.retrieveNewsFromHttp();
    this.publicService.news.subscribe(
      (newsList: New[]) => {
        this.news = newsList;
      }
    )
  }
  ngOnInit() {
  }

}
