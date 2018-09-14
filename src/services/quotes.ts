import { Quote } from '../data/quotes.interface';

export class QuotesService{
    private favQuotes: Quote[] = [];

    addQuoteToFav(quote: Quote){
        this.favQuotes.push(quote);
    }

    removeQuoteFromFav(quote: Quote){
        this.favQuotes = this.favQuotes.filter(function(item){
            return item.id != quote.id;
        })
    }

    getFavoriteQuotes(){
        return this.favQuotes;
    }

    isFavorite(quote: Quote){
        return this.favQuotes.find(function(item){
            return item.id == quote.id;
        })
    }
}