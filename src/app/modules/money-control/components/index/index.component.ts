import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { IndexDashboard } from '../../core/services/json/dashboard';
import { Indices } from '../../core/services/json/Indices';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dashboard: any = IndexDashboard;
  Indices: any = Indices;
  constructor() { 
    console.log(this.dashboard);
    
  }

  ngOnInit(): void {
  }
  changeIndex = (ticker) => {
    const index = _.find(Indices, { symbol: ticker });
    const name = _.get(index,'name');
    const to = Math.round((new Date().getTime()) / 1000);
    const from = Math.round((new Date(new Date().setHours(0, 0, 0, 0)).getTime()) / 1000);
    const expiryDate = '2021-09-23';
    // Intraday
    const intradayTable: any = this.dashboard.intradayDatatable.table;
    const nseUrl: string = 'https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol='+index.id+'&resolution=15&from='+from+'&to='+to;
    intradayTable.ajax.url(nseUrl).load();
    // OTM Call
    const otmCallDatatable: any = this.dashboard.otmCallDatatable.table;
    const otmCallDatatableUrl: string = 'https://algo-trade-strategy.herokuapp.com/market/jsonapi/fno/overview/CE/'+index.id+'/'+expiryDate;
    otmCallDatatable.ajax.url(otmCallDatatableUrl).load();
    // OTM Put
    const otmPutDatatable: any = this.dashboard.otmPutDatatable.table;
    const otmPutDatatableUrl: string = 'https://algo-trade-strategy.herokuapp.com/market/jsonapi/fno/overview/PE/'+index.id+'/'+expiryDate;
    otmPutDatatable.ajax.url(otmPutDatatableUrl).load();
    // OTM Call
    const itmCallDatatable: any = this.dashboard.itmCallDatatable.table;
    const itmCallDatatableUrl: string = 'https://algo-trade-strategy.herokuapp.com/market/jsonapi/fno/overview/CE/'+index.id+'/'+expiryDate;
    itmCallDatatable.ajax.url(otmCallDatatableUrl).load();
    // OTM Put
    const itmPutDatatable: any = this.dashboard.itmPutDatatable.table;
    const itmPutDatatableUrl: string = 'https://algo-trade-strategy.herokuapp.com/market/jsonapi/fno/overview/PE/'+index.id+'/'+expiryDate;
    itmPutDatatable.ajax.url(otmPutDatatableUrl).load();
  }
  intradayDatatableEvt = ($event) => {
    this.dashboard.intradayDatatable.table = $event;
  }
  otmCallDatatableEvt = ($event) => {
    this.dashboard.otmCallDatatable.table = $event;
  }
  otmPutDatatableEvt = ($event) => {
    this.dashboard.otmPutDatatable.table = $event;
  }
  itmCallDatatableEvt = ($event) => {
    this.dashboard.itmCallDatatable.table = $event;
  }
  itmPutDatatableEvt = ($event) => {
    this.dashboard.itmPutDatatable.table = $event;
  }
  
}
