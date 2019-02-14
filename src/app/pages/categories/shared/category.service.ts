import { Injectable, Injector } from '@angular/core';
import { Category } from './category.model';
import {HttpClient} from '@angular/common/http';
import {BaseResourceService} from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {

    constructor(protected injector: Injector) {

    super('api/categories', injector);
  }

}
