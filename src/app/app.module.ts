import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LibraryPage} from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { FavoritesPage } from'../pages/favorites/favorites';
import { AddQuotePage } from '../pages/add-quote/add-quote'; 
import { SettingsPage } from '../pages/settings/settings';
import { QuotesService } from '../service/service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    FavoritesPage,
    AddQuotePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    FavoritesPage,
    AddQuotePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
