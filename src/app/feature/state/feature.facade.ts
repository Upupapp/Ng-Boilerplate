import { Injectable } from "@angular/core";
import * as Model from '../feature.model';
import { State } from './feature.reducer';
import { select, Store } from "@ngrx/store";
import * as featureAction from './feature.actions';
import * as fromfeature from './feature.selector';

@Injectable()
export class FeatureFacade {
    loading$ = this.store.pipe(select(fromfeature.loading));
    featureDetails$ = this.store.pipe(select(fromfeature.getFeatureDetails));
    featureList$ = this.store.pipe(select(fromfeature.getFeatureList));

    constructor(
      private store: Store<State>,
      ) { }

    createfeature(feature: Model.Feature) {
      this.store.dispatch(featureAction.createFeature({ feature }));
    }

    getfeatureList() {

    }

    getfeatureDetails(featureId: string) {

    }
}
