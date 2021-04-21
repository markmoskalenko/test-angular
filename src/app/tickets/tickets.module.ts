import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { MatTableModule } from '@angular/material/table';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketsChooseDateComponent } from './components/tickets-choose-date/tickets-choose-date.component';
import { TicketsChooseTimeComponent } from './components/tickets-choose-time/tickets-choose-time.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ticketsFeatureKey } from '../core/tickets';
import { ticketsReducer } from '../core/tickets/tickets.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TicketsEffects } from '../core/tickets/tickets.effects';
import { AngularCounterModule } from 'angular-input-counter';
import { InputCounterModule } from '../shared/input-counter/input-counter.module';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketsListComponent,
    TicketsChooseDateComponent,
    TicketsChooseTimeComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ticketsFeatureKey, ticketsReducer),
    EffectsModule.forFeature([TicketsEffects]),
    AngularCounterModule,
    InputCounterModule
  ]
})
export class TicketsModule {
}
