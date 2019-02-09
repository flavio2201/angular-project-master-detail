import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError, flatMap } from 'rxjs/operators';
import { Entry } from './Entry.model';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath = 'api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jasonDataToCategories)
    );
  }

  getByid(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jasonDataToEntry)
    );
  }

  create(entry: Entry): Observable<Entry> {
    return this.http.post(this.apiPath, entry).pipe(
      catchError(this.handleError),
      map(this.jasonDataToEntry)
    );
  }

  update(entry: Entry): Observable<Entry> {
    const url = `${this.apiPath}/${entry.id}`;

    return this.http.put(url, entry).pipe(
      catchError(this.handleError),
      map(() => entry )
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }


   private  jasonDataToCategories(jsonData: any[]): Entry[] {
     const categories: Entry[] = [];
      jsonData.forEach(element => categories.push(element as Entry));
      return categories;
    }

    private  jasonDataToEntry(jsonData: any): Entry {
      return jsonData as Entry;
    }

   private handleError(error: any): Observable<any> {
      console.log( 'Erro na requisição =>' , error);
    return  throwError(error);
   }



}
