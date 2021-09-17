import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockStrategyService {

  constructor(private http: HttpClient) { }

  bullCallSpread = () => {

  }

  bullPutSpread = () => {
    
  }

  bearCallSpread = () => {

  }

  bearPutSpread = () => {
    
  }

  longStraddle = () => {
    
  }

  shortStraddle = () => {
    
  }

  longShortStraddle = () => {
    
  }


  callRatioBackSpread = () => {
    
  }

  putRatioBackSpread = () => {
    
  }

  maxPainPcrRatioBackSpread = () => {
    
  }


  bearCallLadder = () => {
    
  }

  syntheticLongAndArbitrage = () => {
    
  }

  ironCondor = () => {
    
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
