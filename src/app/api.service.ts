import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const AUTH_API = 'http://localhost:8000/api/';
const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const httpOptions = {
  headers: new HttpHeaders(headerDict)
};

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {name,password}, httpOptions);
  }
}
