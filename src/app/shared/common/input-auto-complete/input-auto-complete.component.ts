import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import { MoneyControlService } from 'src/app/core/services/api/money-control/money-control.service';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.css']
})
export class InputAutoCompleteComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  autoCompleteOptions$: Observable<string[]>;
  autoCompleteControl = new FormControl();

  constructor(private moneyControl: MoneyControlService) {
    
  }

  ngOnInit() {
    this.autoCompleteOptions$ = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== '') {
          // lookup from github
          return this.lookup(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  lookup(value: string)  {
    return this.moneyControl.search(value.toLowerCase());
  }

  displayFn(item: any): string {
    return item && item.stock_name ? item.stock_name : '';
  }

  selectedOption(evt) {
    console.log(evt);
    
  }
}