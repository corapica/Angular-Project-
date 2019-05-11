import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.http = http ;
  }

  saveUser(user: any): Observable<any> {
    const headers = new HttpHeaders ({'Access-Control-Allow-Origin': '*'}) ;
    return this.http.post('http://localhost:8080/registration', user, {headers: headers}) ;
  }

  loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders ({'Access-Control-Allow-Origin': '*'}) ;
    return this.http.post('http://localhost:8080/login', user, {headers: headers}) ;
  }

  getAllUsers(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:8080/users', {headers: headers}) ;
  }

  getUser(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:8080/getuser', {headers: headers}) ;
  }

  deleteByEmail(token: any, email: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    let httpParams = new HttpParams().set('email', email);
    let options = { params: httpParams, headers: headers };
    return this.http.delete('http://localhost:8080/deleteByEmail', options);
  }

  updateUser(token: any, user: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    let httpParams = new HttpParams();
    let options = { params: httpParams, headers: headers };
    return this.http.put('http://localhost:8080/update',  user, options);
  }


}
