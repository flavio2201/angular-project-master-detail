import { CategoryService } from './../../categories/shared/category.service';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import { Injectable, Injector } from '@angular/core';
import { Entry } from './Entry.model';

import { Observable, throwError} from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector , private categoryService: CategoryService) {
      super('api/entries', injector, Entry.fromJason);
  }

  create(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return super.create(entry);
      })
    );
  }

  update(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return super.update(entry);
      }
    ));
  }

}
