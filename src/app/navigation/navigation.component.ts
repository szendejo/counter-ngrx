import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoggedIn } from '../authentication/state/account.selector';
import { logout } from '../authentication/state/account.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isLoggedIn$ = this.store.select(isLoggedIn);

  constructor(private store:Store<{account:string}>){}

  logout(){
    this.store.dispatch(logout());
  }

}
