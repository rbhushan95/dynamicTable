import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { ExpenseModule } from "./expense/expense.module";

import { RentservicesmainService } from './expense/services/rentservicesmain.service'


@NgModule({
  declarations: [
    AppComponent,
    PopupDemoComponent
  ],
  imports: [
    BrowserModule
    , ExpenseModule
  ],
  providers: [RentservicesmainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
