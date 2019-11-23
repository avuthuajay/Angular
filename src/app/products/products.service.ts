import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse) {
    // In real work app, we may send the server to some remote logging infracture
    // instead of just logging it to console.
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client side or network error occured. Handle it accordingly
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response bpdy may contain clues as to what went wrong.
      errorMessage = `Server returmed code: ${err.status}, error message is ${err.message}`;
    }
    console.log('AJAY: error occured');
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
