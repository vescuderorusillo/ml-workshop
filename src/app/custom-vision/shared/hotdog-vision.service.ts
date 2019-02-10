import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const config = {
  subscriptionKey: '', // TODO: Fill here
  // tslint:disable-next-line:max-line-length
  uriBase: '' // TODO: Fill here
};

@Injectable({
  providedIn: 'root'
})
export class HotdogVisionService {
  private url;
  private headers;

  constructor(private http: HttpClient) {
    this.url = config.uriBase;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      'Prediction-Key': config.subscriptionKey
    });
  }

  public recognizeHotDog(image: any): Observable<any> {
    const options = {headers: this.headers};

    return this.http.post<any>(this.url, image, options)
      .pipe(catchError(this.handleError<any>('recognizeHotDog')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
