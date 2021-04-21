import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCounterComponent } from './input-counter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputCounterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputCounterComponent
  ]
})
export class InputCounterModule {
}
