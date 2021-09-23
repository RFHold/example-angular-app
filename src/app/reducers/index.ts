import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as LogRocket from 'logrocket';
import { environment } from '../../environments/environment';
import createNgrxMiddleware from 'logrocket-ngrx';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [createNgrxMiddleware(LogRocket)];
