import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  posts: any;
  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://www.reddit.com/r/mademesmile/top/.json?limit=50').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
      });


  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
