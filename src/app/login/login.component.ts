import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginControl } from '../login-control';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     loginLet:boolean=false;

     goster:boolean=false;

     kontroll:boolean=false;

    


  constructor( public router: Router, private logservice:LoginService){

  }

  loginForm:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  email:AbstractControl=this.loginForm.get('email');
  password:AbstractControl=this.loginForm.get('password');

  get emailS(){
    return this.email.value;
  }
  get passwordS(){
    return this.password.value;
  }
     tut:Object[]=new Array<Object>();
  loginClick(){
    this.loginLet=true;
    if(this.loginForm.valid){
             this.logservice.get().subscribe((data:any) =>{
                  data.forEach(dat =>{
                     if((dat.email===this.emailS) && (dat.password===this.passwordS)){
                               this.router.navigate(['/home']); 
                              this.kontroll=true;
                     }
                })
                if(this.kontroll){

                }else{
                  this.goster=true;
                }
             })
           
    }else{
        
    }
  }




register(){
       this.router.navigate(['/register']);
}

  ngOnInit(): void {
  }

}
