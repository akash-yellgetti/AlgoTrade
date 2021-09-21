import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public selectedShare: Subject<any> = new Subject();
  constructor() { }
  public setSelectedShare = (data: any) => {
    this.selectedShare.next(data);
  }

  getSelectedShare(): Observable<any> {
    return this.selectedShare.asObservable();
  }
}
