import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyControlRoutingModule } from './money-control-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { StockComponent } from './components/stock/stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [HomeComponent, IndexComponent, StockComponent],
  imports: [
    MaterialModule,
    SharedModule,
    MoneyControlRoutingModule
  ]
})
export class MoneyControlModule { }
