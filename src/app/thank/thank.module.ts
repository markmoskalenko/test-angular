import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankRoutingModule } from './thank-routing.module';
import { ThankComponent } from './thank.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { MatTableModule } from '@angular/material/table';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    ThankComponent,
    TicketsListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ThankRoutingModule,
    MatTableModule
  ]
})
export class ThankModule {
}
