import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getCountState = createFeatureSelector<{count:number}>('count');

export const selectCount = createSelector(
    getCountState,
    (state: {count: number}) => state.count
);