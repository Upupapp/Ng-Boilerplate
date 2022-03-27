import { Injectable } from '@angular/core';
import {
  of
} from 'rxjs';
import {
  catchError,
  map,
  mergeMap
} from 'rxjs/operators';
import {
  Actions,
  ofType,
  createEffect
} from '@ngrx/effects';
import * as FeatureActions from './feature.actions';
import * as Model from '../feature.model';
import { FeatureService } from '../state/feature.service';

@Injectable()
export class FeatureEffects {

  constructor(
    private featureService: FeatureService,
    private actions$: Actions,
  ) { }

  createFeature$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeatureActions.createFeature),
      mergeMap((action: any) => this.featureService.createAfeature(action.Feature)
        .pipe(
          map((res: any) => {
            const feature = res.dat;
            return FeatureActions.createFeatureSuccess(feature);
          }),
          catchError((error) => {
            return of(FeatureActions.createFeatureFail(error))
          })
        )
      )
    );
  });
}
