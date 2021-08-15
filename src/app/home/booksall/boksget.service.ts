import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoksgetService {
   booksUrl:string="http://localhost:5000/books";

   outhersUrl:string="http://localhost:5000/authors";

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.booksUrl);
  }

  getOuthers(){
    return this.http.get(this.outhersUrl);
  }


}
