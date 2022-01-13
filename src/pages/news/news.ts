import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

countryCode: string;
countryName: string;
url: string = "https://newsapi.org/v2/top-headlines?country=";
pageSize = "&pageSize=5";
apiKey = "&apiKey=d76d8d8d81e2403c821babfd0e8f1932";
articles: any =[];
newsDisplayTitle : string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    
  }


  ionViewDidEnter() {
    this.countryCode = this.navParams.get('code');
	this.countryName = this.navParams.get('countryName');
	

	
	this.getNewsAPI().subscribe(data => {
	this.articles = data.articles;
	if(this.articles.length == 0){
	this.newsDisplayTitle = "No News from " + this.countryCode;
	}else {
	this.newsDisplayTitle = "News from " + this.countryCode;
	}
	
	
	});
  }
  
  
    getNewsAPI(): Observable<any>{	
return this.http.get(this.url + this.countryCode + this.pageSize + this.apiKey);  
  }
  

}
