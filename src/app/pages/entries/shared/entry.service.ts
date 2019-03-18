import { CategoryService } from './../../categories/shared/category.service';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import { Injectable, Injector } from '@angular/core';
import { Entry } from './Entry.model';
import { Observable, throwError} from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector , private categoryService: CategoryService) {
      super('api/entries', injector, Entry.fromJason);
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  public getByMonthAndYear(month: number , year: number): Observable <Entry[]> {
    return this.getAll().pipe(
      map(entries => this.filterByMontAndYear(entries, month, year))
    );
 }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any ): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return sendFn(entry);
      }),
      catchError(this.handleError)
    );
  }

  private filterByMontAndYear(entries: Entry[], month: number, year: number){
    return entries.filter(entry => {
    const entryDate = moment(entry.date, 'DD/MM/YYYY');
    const monthMatches =  entryDate.month() + 1 === month;
    const yearMatches =  entryDate.year() === year;
      if (monthMatches && yearMatches) { return entry; }
    });
  }


}
