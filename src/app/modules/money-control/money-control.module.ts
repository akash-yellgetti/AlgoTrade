import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyControlRoutingModule } from './money-control-routing.module';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MoneyControlRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class MoneyControlModule { }
