import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderFormRoutingModule } from './order-form-routing.module';
import { OrderFormComponent } from './order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrderFormRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatRippleModule,
  ]
})
export class OrderFormModule {
}
