import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private subject = new Subject<any>() ;
  isLoggedIn() {
    if(localStorage.getItem('currentUser')) {
      this.subject.next({status: true});
    } else {
      this.subject.next({status: false});
    }
  }
  clearStatus() {
    this.subject.next();
  }
  getStatus(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
