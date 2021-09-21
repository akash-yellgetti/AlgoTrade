import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyControlRoutingModule } from './money-control-routing.module';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HomeComponent } from './layout/home/home.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './components/index/index.component';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, IndexComponent, StockComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    MoneyControlRoutingModule
  ]
})
export class MoneyControlModule { }
