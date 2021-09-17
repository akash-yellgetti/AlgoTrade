import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { RightSidebarComponent } from './shared/layout/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './shared/layout/left-sidebar/left-sidebar.component';
import { InputAutoCompleteComponent } from './shared/common/input-auto-complete/input-auto-complete.component';
import { DynamicTableComponent } from './shared/common/dynamic-table/dynamic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from './modules/material/material.module';
import { MoneyControlModule } from './modules/money-control/money-control.module';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { DatatableComponent } from './../app/shared/common/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    InputAutoCompleteComponent,
    DynamicTableComponent,
    NavigationComponent,
    DashboardComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MoneyControlModule,
    LayoutModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
