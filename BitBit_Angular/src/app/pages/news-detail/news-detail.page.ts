import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  public new: New;
  private id: number;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private publicService: PublicService) {
    this.activateRoute.params.subscribe(
      (params: ParamMap) => {
        if (params['id'] == null) {
          this.router.navigate(["/home"])
        } else {
          this.id = Number(params['id']);
          this.publicService.retrieveNewFromHttp(this.id);
          this.publicService.new.subscribe(
            (data_new: New) => {
              this.new = data_new;
            }
          )
        }
      }
    );
  
  }

  ngOnInit() {
  }
}
