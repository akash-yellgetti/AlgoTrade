import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockStrategyService {

  constructor(private http: HttpClient) { }

  searchStock(text): Observable<any> {
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxCompanySearch.jsp?search='+text;
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': 'https://www.nseindia.com/ChartApp/install/charts/mainpage.jsp',
      Host: 'www.nseindia.com'
    });

    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'not found')));
  }

  private handleError(error: any, message: any): any {
    // this.showLoader = false;
    // this.toastr.error(message);

    switch (error.code) {
      case 400:
      case 409:
        for (const err of error.error) {
          // this.toastr.error(err.message);
        }
        break;
      default:
        // this.toastr.error(message);
    }
    return throwError(error.error || 'Server error');
  }
}
