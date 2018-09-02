import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageNamePage } from '../pageSecond/page-name';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }
  goToOtherPage(){
    this.navCtrl.push(PageNamePage);
  }
}
