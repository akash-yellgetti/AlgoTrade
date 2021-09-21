import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {
      path: 'main',
      children: [
        {
          path: 'money-control',
          loadChildren: () => import('./modules/money-control/money-control.module').then(mod => mod.MoneyControlModule)
        }
      ]
    },
    { 
      path: '**', redirectTo: 'main', pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
