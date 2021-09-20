import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { dashboard } from 'src/app/core/json/dashboard';
import { SubjectService } from 'src/app/core/services/common/subject/subject.service';
import { MoneyControlService } from 'src/app/core/services/api/money-control/money-control.service';
import * as _ from 'lodash';
// Chart.register(...registerables);
import Chart from 'chart.js/auto';
import { lowerFirst } from 'lodash';
import { StockStrategyService } from 'src/app/core/services/common/stock-strategy/stock-strategy.service';
import { bearPutSpreadData } from 'src/app/core/json/bearPutSpread';
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
  public chart: any;
  constructor(private breakpointObserver: BreakpointObserver,
    private subjectService: SubjectService, 
    private stockStrategy: StockStrategyService, 
    private moneyControlService: MoneyControlService) {}
  ngOnInit() {
    this.subjectService.getSelectedShare().subscribe((share) => {
      this.getInfo(share)
    });

    
var bearPutSpreadDatacCtx: any = document.getElementById('bearPutSpread');


const config: any = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
        label: 'Market',
        data: [],
        borderWidth: 10
    }]
},
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'BearPutSpread'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};

this.chart = new Chart(bearPutSpreadDatacCtx, config);
  }

  getInfo = (share: any) => {
    
    // console.log(this.dashboard.intradayDatatableSetting);
    
    const str = _.get(share, 'pdt_dis_nm');
    const symbol = _.trim(_.nth(_.split(_.last(_.split(str, ';')), ','), 1));
    const sc_id = _.get(share, 'sc_id');
    const stock_name = _.get(share, 'stock_name');
    this.moneyControlService.info(sc_id).subscribe((res) => {
      const detail = res.data;
      console.log(detail);
      const symbol = _.get(detail, 'company');
      console.log(symbol);
      this.moneyControlService.getSymbolInfo(_.toUpper(symbol)).subscribe((data) => {
        const ticker = _.get(data, 'ticker');
        console.log('ticker', ticker);
        
        
      })
    })
  }

  changeIndex = (ticker) => {
    const intradayTable: any = this.dashboard.intradayDatatableSetting.table;
    const callTable: any = this.dashboard.callDatatableSetting.table;
    const putTable: any = this.dashboard.putDatatableSetting.table;
    const nseOptionChainDatatable: any = this.dashboard.nseOptionChainDatatable.table;
    const nseUrl: string = 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY';
    nseOptionChainDatatable.ajax.url(nseUrl).load();
    const data = nseOptionChainDatatable.data();
    // const data = bearPutSpreadData;
    // console.log( data);
    const sellPE = _.find(data, { strikePrice: 17300 });
    const buyPE = _.find(data, { strikePrice: 17350 });
    const bullCallSpread = this.stockStrategy.bearPutSpread(data, buyPE, sellPE);
    console.log(bullCallSpread);
    
    // intradayTable.ajax.url(intradayUrl).load().data();



    // const tableData = intradayTable;
    const chartData = _.chain(bullCallSpread).mapValues('net').values().value();
    // // console.log(chartData.length);
    
    const chartLabels = _.chain(bullCallSpread).mapValues('strikePrice').values().value();
    // // console.log(chartLabels.length);

    this.chart.data.labels = chartLabels;
    this.chart.data.datasets.forEach((dataset) => {
      dataset.data = chartData;
    });
    this.chart.update();
    // const callOptionUrl = "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id="+ticker+"&ExpiryDate=2021-09-23";
    // console.log(callOptionUrl);
    
    // callTable.ajax.url(callOptionUrl).load();
    // const putOptionUrl = "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=PE&id="+ticker+"&ExpiryDate=2021-09-23";
    // console.log(putOptionUrl);
    // putTable.ajax.url(putOptionUrl).load();
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
  nseOptionChainDatatableEvt = ($event) => {
    this.dashboard.nseOptionChainDatatable.table = $event;
  }
  
}
