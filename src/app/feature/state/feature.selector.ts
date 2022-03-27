import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureState } from './feature.reducer';

const getFeatureInitState = createFeatureSelector<FeatureState >('feature');

export const loading = createSelector (
  getFeatureInitState,
  state => state.loading
);

export const getFeatureList = createSelector (
  getFeatureInitState,
  state => state.list
);

export const getFeatureDetails = createSelector (
  getFeatureInitState,
  state => state.selected
);

