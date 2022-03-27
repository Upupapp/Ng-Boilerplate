import * as AppState from '@main/app.state';
import { createReducer, on } from '@ngrx/store';
import * as Model from '../feature.model';
import * as FeatureActions from './feature.actions';

export interface State extends AppState.State {
  feature: FeatureState;
}

export interface FeatureState {
  selected: Model.Feature;
  list: Model.Feature[];
  error: any;
  succesMsg: string;
  loading: boolean;
}

const initialState: FeatureState = {
  selected: {
    someProperty: ''
  },
  list: [],
  succesMsg: '',
  error: null,
  loading: false,
};

export const featureReducer = createReducer<FeatureState>(
  initialState,
  on(FeatureActions.createFeature, (state): FeatureState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(FeatureActions.createFeatureSuccess, (state, action): FeatureState => {
    return {
      ...state,
      loading: false,
      list: action.payload
    };
  }),
  on(FeatureActions.createFeatureFail, (state, action): FeatureState => {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  })
);
