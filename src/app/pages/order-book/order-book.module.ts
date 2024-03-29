
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderBookPageRoutingModule } from './order-book-routing.module';

import { OrderBookPage } from './order-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderBookPageRoutingModule
  ],
  declarations: [OrderBookPage]
})
export class OrderBookPageModule { }
