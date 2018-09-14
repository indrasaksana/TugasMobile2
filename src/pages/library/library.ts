import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quoteCollection = quotes;
  }

  ionViewDidLoad() {
    
  }

  toQuotesPage(category){
    this.navCtrl.push(QuotesPage, category)
  }
}
