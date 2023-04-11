import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = '/assets/db/db.json'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
