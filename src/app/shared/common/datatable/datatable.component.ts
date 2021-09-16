import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../core/services/common/subject/subject.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor(private subjectService: SubjectService) {
    
   }

  ngOnInit(): void {
    

    
  }

}
