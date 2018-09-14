import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotes: Quote[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private alertCtrl: AlertController) {
    this.quotes = this.navParams.get('quotes');
  }

  ionViewDidLoad() {
    
  }

  checkFav(quote: Quote){
    return this.quotesService.isFavorite(quote);
  }

  onFav(quote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure want to add the quote to favorites?',
      buttons:[
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFav(quote);
            console.log(this.quotesService)
          }
        },
        {
          text: 'No'
        }
      ]
    });
    alert.present();
  }

  onUnfav(quote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Remove Quote',
      message: 'Are you sure want to remove the quote to favorites?',
      buttons:[
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.removeQuoteFromFav(quote);
          }
        },
        {
          text: 'No'
        }
      ]
    });
    alert.present();
  }
}
