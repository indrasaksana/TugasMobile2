import { Quote } from '../data/quote.interface';

export class QuotesService {

    private favoriteQuotes: Quote[] = [];
    addQuoteToFavorites(quote: Quote) {
         this.favoriteQuotes.push(quote);
    }
    removeQuoteFromFavorites(quote: Quote) {}
    isFavorite(quote: Quote) {}
    getAllFavoriteQuotes(){}
}