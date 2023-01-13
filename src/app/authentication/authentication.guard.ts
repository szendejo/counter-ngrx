import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { isLoggedIn } from '../authentication/state/account.selector';


@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private store: Store<{account:string}>,
        private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean>{
            return this.store.pipe(
                select(isLoggedIn),
                tap(loggedIn => {
                    if(!loggedIn) {
                        this.router.navigateByUrl('/login');
                    }
                })
            )
    }
}
