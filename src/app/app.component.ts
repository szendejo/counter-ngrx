import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { login } from './authentication/state/account.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-ngrx';

  constructor(private store:Store<{account:string}>){}

  ngOnInit(){
    const loggedInAccount = localStorage.getItem('account');
    if(loggedInAccount) {
      this.store.dispatch(login({account: JSON.parse(loggedInAccount)}))
    }
  }
}
