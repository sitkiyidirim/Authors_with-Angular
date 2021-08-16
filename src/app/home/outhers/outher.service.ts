import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutherService {
  
  booksUrl:string='http://localhost:5000/books';

  constructor(private http:HttpClient) { }

  
  getBooks(){
    return this.http.get(this.booksUrl);
  }
  addBooks(obj:Object){
    return this.http.post(this.booksUrl,obj);
  }
  deletetBooks(id:number){
    return this.http.delete(this.booksUrl+'/'+id);
  }
}
