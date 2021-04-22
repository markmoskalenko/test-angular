import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss']
})
export class InputCounterComponent implements OnInit, OnDestroy {
  @Input() value = 0;
  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();
  private readonly subscription$ = new Subscription();

  control = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.control.setValue(this.value);
    this.subscription$.add(
      this.control.valueChanges.pipe(debounceTime(100)).subscribe((_) => this.changeValue.emit(_))
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  decrement(): void {
    let value = +this.control.value;
    value = value - 1 < 0 ? 0 : --value;
    this.control.setValue(value);
  }

  increment(): void {
    let value = +this.control.value;
    this.control.setValue(++value);
  }
}
