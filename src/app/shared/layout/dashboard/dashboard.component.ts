import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { dashboard } from 'src/app/core/json/dashboard';
import { SubjectService } from 'src/app/core/services/common/subject/subject.service';
import { MoneyControlService } from 'src/app/core/services/api/money-control/money-control.service';
import * as _ from 'lodash';

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
    this.moneyControlService.info(_.get(share, 'sc_id')).subscribe((res) => {
      console.log(res);
      
    })
  }
  
}
