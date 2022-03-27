import {
  createAction,
  props
} from "@ngrx/store";
import * as Model from '../feature.model';

enum AllFeatureActionTypes {
  CreateFeature = '[Feature] - Create a Feature',
  CreateFeatureSuccess = '[Feature] - Create a Feature Success',
  CreateFeatureFail = '[Feature] - Create a Feature Fail',

}

export const createFeature = createAction(
  AllFeatureActionTypes.CreateFeature,
  props<{ feature: Model.Feature }>()
);

export const createFeatureSuccess = createAction(
  AllFeatureActionTypes.CreateFeatureSuccess,
  props<{ payload: any }>()
);

export const createFeatureFail = createAction(
  AllFeatureActionTypes.CreateFeatureFail,
  props<{ payload: any }>()
);
