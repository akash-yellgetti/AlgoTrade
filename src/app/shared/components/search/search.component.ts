import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import * as _ from 'lodash';
import { SubjectService } from './../../services/subject/subject.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  autoCompleteOptions$: Observable<string[]>;
  autoCompleteControl = new FormControl();

  constructor(private subjectService: SubjectService) {
    
  }

  ngOnInit() {
    this.autoCompleteOptions$ = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (!_.isObject(value) && value !== '') {
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
    return of([{}]);
  }

  displayFn(item: any): string {
    return item && item.stock_name ? item.stock_name : '';
  }

  selectedOption(evt: any) {
    this.subjectService.setSelectedShare(evt);
  }
}