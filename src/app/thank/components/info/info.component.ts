import { Component, Input, OnInit } from '@angular/core';
import { OrderFormModel } from '../../../core/global/order-form.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() orderForm: OrderFormModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
