import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../core/form/error-state-matcher';
import { GlobalService } from '../core/global/global.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('')
    }),
    policy: new FormControl(''),
    gender: new FormControl('male'),

  });

  matcher = new CustomErrorStateMatcher();

  constructor(private readonly globalService: GlobalService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.orderForm.valid) {
      this.globalService.setOrderForm(this.orderForm.getRawValue());
    }
  }
}
