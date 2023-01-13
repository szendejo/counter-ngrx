import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './state/counter.actions';
import { selectCount } from './state/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$ = this.store.select(selectCount);
  
  constructor(private store: Store<{count: number}>){
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());}

  reset() {
    this.store.dispatch(reset());}

}
