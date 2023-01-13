import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAccountState = createFeatureSelector<{account:string}>('account');

export const selectAccount = createSelector(
    getAccountState,
    (state: {account:string}) => state.account
);

export const isLoggedIn = createSelector(
    getAccountState,
    account => !!account.account
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)