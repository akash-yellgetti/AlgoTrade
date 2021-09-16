import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoneyControlService {

  constructor(private http: HttpClient) {
    
  }

  search(text: string): Observable<any> {
    const url = 'https://www.moneycontrol.com/mccode/common/autosuggestion_solr.php?type=1&format=json&query='+text;
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to search.')));
  }

  info(sc_did: string): Observable<any> {
    
    const url = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/'+sc_did;
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to fetch information.')));
  }

  vwapInfo(sc_did: string): Observable<any> {
    const url = 'https://www.moneycontrol.com/stocks/company_info/get_vwap_chart_data.php?sc_did='+sc_did;
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to fetch information.')));
  }

  intraday(symbol: string, duration: string, from: string, to: string): Observable<any> {
    const url = 'https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=TCS&resolution=15&from=1631688963&to=1631782069';
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to fetch information.')));
  }

  callOptions(symbol: string, duration: string, from: string, to: string): Observable<any> {
    const url = 'https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id=NIFTY&ExpiryDate=2021-09-16';
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to fetch information.')));
  }

  putOptions(symbol: string, duration: string, from: string, to: string): Observable<any> {
    const url = 'https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=PE&id=NIFTY&ExpiryDate=2021-09-16';
    const headers = new HttpHeaders({
    });
    const options = { headers: headers };
    return this.http.get(url, options)
      .pipe(map((data) => data),
        catchError((err) => this.handleError(err, 'Failed to fetch information.')));
  }

  private handleError(error: any, where: any): any {
    // this.toastr.error(error.message);

    switch (error.code) {
      case 400:
        for (const err of error.error) {
          // this.toastr.error(err.message);
        }
        break;
    }
    return throwError(error.error || 'Server error');
  }
}
