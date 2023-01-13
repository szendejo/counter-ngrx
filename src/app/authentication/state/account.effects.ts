import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { login, logout} from "./account.actions";
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationEffects {
    loginEffect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(login), 
        tap(action => localStorage.setItem('account', JSON.stringify(action.account)))),
        {dispatch: false});



    logoutEffect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(logout),
        tap(action => {
            localStorage.removeItem('account'); 
            this.router.navigateByUrl('/login');
        })),
        {dispatch: false});

    constructor(private actions$:Actions, private router:Router){}
}