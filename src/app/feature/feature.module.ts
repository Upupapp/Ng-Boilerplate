import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '@app-shared/shared.module';
import { featureReducer } from './state/feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeatureFacade } from './state/feature.facade';
import { FeatureEffects } from './state/feature.effects';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent
  }
];

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('feature', featureReducer),
    EffectsModule.forFeature([FeatureEffects]),
    RouterModule.forChild(routes),
  ],
  providers: [FeatureFacade]
})
export class FeatureModule { }
