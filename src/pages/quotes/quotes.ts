import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
// kenapa dia gak ambil js lagi
import{ Quote } from'../../data/quote.interface';
import { QuotesService } from '../../service/service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit{
  quotes:any;
  constructor(public navCtrl: NavController, private navParams:NavParams, private quoteservice: QuotesService, private alertCtrl: AlertController){

  }

  ngOnInit(){
    this.quotes = this.navParams.data;
    console.log(this.quotes);

  }
  addToFavorite(quote){
    this.quoteservice.addQuoteToFavorites(quote);
  }

  onShowAlert() {
    const alert = this.alertCtrl.create({
      title: 'Add Quotes',
      message:'Are you sure you want to add the quote to favorites?',
      buttons:[
        {
          text:'OK',
          handler:()=>{
            console.log("OK");
            console.log(this.quoteservice);
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log("Cancel")
          }
        }
      ]
    });
    alert.present();
  }
}
