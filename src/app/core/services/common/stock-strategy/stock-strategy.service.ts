import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StockStrategyService {

  constructor(private http: HttpClient) { }

  bullCallSpread = (buyCE: any, sellCE: any,) => {

  }

  bullPutSpread = () => {
    
  }

  bearCallSpread = () => {

  }

  bearPutSpread  = (strikeData: any[], buyPE: any, sellPE: any) => {
    const data = _.reduce(strikeData, (arr, res, i) => {
        const option = strikeData[i];
        const strikePrice = option.strikePrice;
        console.log(buyPE.strikePrice-strikePrice);
        
        const d = {
          strikePrice,
          buyPEProfit: _.max([(buyPE.strikePrice-strikePrice), 0])-buyPE.PE.lastPrice,
          sellPEProfit: _.min([(strikePrice-sellPE.strikePrice), 0])+sellPE.PE.lastPrice,
          net: 0
        }
        d.net = d.buyPEProfit+d.sellPEProfit;
        arr.push(d);
        return arr;
    }, [])
    return data;
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
