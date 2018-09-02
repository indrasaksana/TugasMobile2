import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageNamePage } from './page-name';

@NgModule({
  declarations: [
    PageNamePage,
  ],
  imports: [
    IonicPageModule.forChild(PageNamePage),
  ],
})
export class PageNamePageModule {


}
