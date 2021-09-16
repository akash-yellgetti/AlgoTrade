import {Component, ViewChild, OnInit, Input, SimpleChange} from '@angular/core';
import _ from 'lodash';

interface column {
  columnDef: string,
  header: string,
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  tableColumns:Array<any>
  displayedColumns:Array<any>
  dataSource:any
  @Input() columns:Array<column>
  @Input() data: any;
  
  ngOnInit() {
    // Get list of columns by gathering unique keys of objects found in DATA.
    const columns = _.cloneDeep(this.columns);
      // .reduce((columns, row) => {
      //   return [...columns, ...Object.keys(row)]
      // }, [])
      // .reduce((columns, column) => {
      //   return columns.includes(column)
      //     ? columns
      //     : [...columns, column]
      // }, [])
      console.log(columns);
      
    // Describe the columns for <mat-table>.
    this.tableColumns = columns.map(column => {
      return { 
        ...column,
        cell: (element: any) => `${_.get(element, column.columnDef) ? _.get(element, column.columnDef) : ``}`     
      }
    })
    console.log(this.tableColumns);
    this.displayedColumns = this.tableColumns.map(c => c.columnDef);
    console.log(this.columns);
    
    // Set the dataSource for <mat-table>.
    this.dataSource = this.data;
    // console.log('', this.dataSource);
    
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    const data: any = changes['data'];
    if (data && data.currentValue) {
      // console.log('data', data);
      console.log('dynamic-table', data);
      this.ngOnInit();
    }

    const columns: any = changes['columns'];
    if (columns && columns.currentValue) {
      // console.log('data', data);
      console.log('dynamic-table', columns);
      this.ngOnInit();
    }
  }
 
}