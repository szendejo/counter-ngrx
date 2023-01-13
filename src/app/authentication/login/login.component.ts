import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import { login } from '../state/account.actions';
import { selectAccount } from '../state/account.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  account$ = this.store.select(selectAccount);

  constructor(private store:Store<{account:string}>, private router: Router){}

  login(){
    this.store.dispatch(login({account: 'test'}));
    this.router.navigateByUrl('/home');
  }
}
