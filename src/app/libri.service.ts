import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class Book {
  id: string|undefined;
  titolo: string|undefined;
  luogo_edizione:string | undefined;
  anno_edizione: number | undefined;
  isbn:number|undefined;
  isbn13:number|undefined;
  copie:number|undefined;
  publisher_id:string | undefined;
  author_id:string | undefined;
  topic_id:string | undefined ;
  created_at:string | undefined;
  updated_at:string | undefined;
}
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
export class LibriService {

  constructor(private http: HttpClient) { }


  index(): Observable<any> {
    return this.http.get(AUTH_API + 'libri', httpOptions);
  }
}
