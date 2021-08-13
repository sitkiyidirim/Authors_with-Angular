import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    usersUrl:string = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }


  get(){
   return  this.http.get(this.usersUrl);
  }
}
