import { Component } from '@angular/core';
import { Quote } from '../../data/quotes.interface';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote: Quote
  text: String
  person: String
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.text = this.navParams.get('quote').text;
    this.person = this.navParams.get('quote').person;
  }

  closeModal(remove: boolean){
    this.viewCtrl.dismiss(remove);
  }
}
