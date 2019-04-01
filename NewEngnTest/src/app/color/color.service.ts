import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  map } from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private dataUrl = 'https://jonasjacek.github.io/colors/data.json';
  colors: any;
  constructor(private http: HttpClient,
      private firebase: AngularFireDatabase) { }

  getData():Observable<any>{
    //return this.http.get(this.dataUrl).pipe(
      //tap(data => console.log('All: '+ JSON.stringify(data)))
    //);
    this.colors = this.firebase.list('colors').valueChanges();
    return this.colors;
  }

  getElement(id:any):Observable<any>{
    return this.getData().pipe(
      map((colors) => colors.find(p => p.colorId == id))
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
