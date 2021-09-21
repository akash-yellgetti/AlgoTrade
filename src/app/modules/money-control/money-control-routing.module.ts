import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { StockComponent } from './components/stock/stock.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'stock',
        component: StockComponent
      }
    ]
  },
  { 
    path: '**', component: HomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyControlRoutingModule { }
