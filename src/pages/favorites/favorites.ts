import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favQuotes: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private alertCtrl: AlertController,
    private modalCtrl: ModalController) {
    this.favQuotes = this.quotesService.getFavoriteQuotes();
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    this.favQuotes = this.quotesService.getFavoriteQuotes();
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
            console.log(this.quotesService)
            this.favQuotes = this.quotesService.getFavoriteQuotes();
          }
        },
        {
          text: 'No'
        }
      ]
    });
    alert.present();
  }

  showQuote(item: Quote){
    let modal = this.modalCtrl.create(QuotePage, {quote: item});
    modal.present();
    modal.onDidDismiss(
      (remove:boolean) => {
        if(remove){
          this.quotesService.removeQuoteFromFav(item);
          this.favQuotes = this.quotesService.getFavoriteQuotes();
        }
      }
    )
  }
}
