import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tickets',
    pathMatch: 'full',
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then((m) => m.TicketsModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order-form/order-form.module').then((m) => m.OrderFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
