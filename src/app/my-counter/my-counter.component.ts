import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { selectCount } from '../counter.selector';

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
