import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data:any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    this.newsService.getData('everything?q=bitcoin&from=2020-03-26&sortBy=publishedAt')
    .subscribe(data => {console.log(data);

    this.data = data;

    });

    

  }

}
