import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   usersUrl='http://localhost:5000/users';
  constructor(public http:HttpClient) {

  }

  post(Obj:Object): Observable<[Object]>{
   return this.http.post<[Object]>(this.usersUrl,Obj);
  }
}
