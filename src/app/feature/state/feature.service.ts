import { Injectable } from "@angular/core";
import { environment } from '@environments/environment';
import { BaseService } from '@app-core/services/base.service';
import * as Model from '../feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  featureURL = `${environment.api_url}/api/v1/feature`;

  constructor(
    private baseService: BaseService
  ) { }

  createAfeature(feature: Model.Feature) {
    // TODO change to actual
    return this.baseService.post(`${this.featureURL}/add`, {
      ...feature,
    });
  }
}
