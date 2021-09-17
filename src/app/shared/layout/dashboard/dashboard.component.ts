import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { dashboard } from 'src/app/core/json/dashboard';
import { SubjectService } from 'src/app/core/services/common/subject/subject.service';
import { MoneyControlService } from 'src/app/core/services/api/money-control/money-control.service';
import * as _ from 'lodash';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  public dashboard = dashboard;
  constructor(private breakpointObserver: BreakpointObserver,private subjectService: SubjectService, private moneyControlService: MoneyControlService) {}
  ngOnInit() {
    this.subjectService.getSelectedShare().subscribe((share) => {
      this.getInfo(share)
    });
  }

  getInfo = (share: any) => {
    const intradayTable: any = this.dashboard.intradayDatatableSetting.table;
    const callTable: any = this.dashboard.callDatatableSetting.table;
    const putTable: any = this.dashboard.putDatatableSetting.table;
    // console.log(this.dashboard.intradayDatatableSetting);
    
    const str = _.get(share, 'pdt_dis_nm');
    const symbol = _.trim(_.nth(_.split(_.last(_.split(str, ';')), ','), 1));
    const sc_id = _.get(share, 'sc_id');
    const stock_name = _.get(share, 'stock_name');
    this.moneyControlService.info(sc_id).subscribe((res) => {
      const detail = res.data;
      console.log(detail);
      const symbol = _.get(detail, 'NSEID');
      console.log(symbol);
      this.moneyControlService.getSymbolInfo(symbol).subscribe((data) => {
        const ticker = _.get(data, 'ticker');
        const intradayUrl: string = this.moneyControlService.intradayUrl(ticker);
        intradayTable.ajax.url(intradayUrl).load();
        // const callOptionUrl = "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id="+ticker+"&ExpiryDate=2021-09-30";
        // callTable.ajax.url(callOptionUrl).load();
      //   // const putOptionUrl = "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=PE&id="+symbol+"&ExpiryDate=2021-09-16";
      //   // putTable.ajax.url(putOptionUrl).load();
      })
    })
  }

  intradayDatatableEvt = ($event) => {
    this.dashboard.intradayDatatableSetting.table = $event;
  }

  callDatatableEvt = ($event) => {
    this.dashboard.callDatatableSetting.table = $event;
  }
  
  putDatatableEvt = ($event) => {
    this.dashboard.putDatatableSetting.table = $event;
  }
  
}
