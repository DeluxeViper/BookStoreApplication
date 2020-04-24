import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected endpoint = 'http://localhost:8080/bookstore-back-1.0/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  countBooks(): Observable<any> {
    return this.http.get(this.endpoint + 'books/count').pipe(
      map(this.extractData)
    );
  }
  getBooks(): Observable<any> {
    return this.http.get(this.endpoint + 'books').pipe(
      map(this.extractData)
    );
  }

  getBook(id: string | number): Observable<any> {
    return this.http.get(this.endpoint + 'books/' + id).pipe(
      map(this.extractData)
    );
  }

  // POST
  createBook(book): Observable<any> {
    console.log(book);
    return this.http.post<any>(this.endpoint + 'books', JSON.stringify(book), this.httpOptions).pipe(
      tap((book) => console.log(`added Book w/ id=${book.id}`)),
      catchError(this.handleError<any>('createBook'))
    );
  }

  // DELETE
  deleteBook<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.endpoint + 'books/' + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app run by returning empty as a result
      return of(result as T);
    }
  }
}
