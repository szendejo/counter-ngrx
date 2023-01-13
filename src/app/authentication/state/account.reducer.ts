import {createReducer, on} from '@ngrx/store'
import { login, logout } from './account.actions'

export interface AccountState {
    account: string
}

export const initialAccountState: AccountState = {
    account: ''
};

export const accountReducer = createReducer(
    initialAccountState,
    on(login, (state, action) => ({ account: action.account})),
    on(logout, (state, action) => ({account: ''}) )
);