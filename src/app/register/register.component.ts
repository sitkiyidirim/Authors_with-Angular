import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    error:string[]=[];
    succsesfuly:boolean=false;

  
    clicksubmited:boolean=false;
  constructor(private registerService:RegisterService) { }
     
   usersRegisterForm=new FormGroup({
     name:new FormControl('',Validators.required),
     surname:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(5)]),
   })

   name:AbstractControl=this.usersRegisterForm.get('name');
   surname:AbstractControl=this.usersRegisterForm.get('surname');
   email:AbstractControl=this.usersRegisterForm.get('email');
   password:AbstractControl=this.usersRegisterForm.get('password');


  
  

  submitedUsers(){
      this.clicksubmited=true;
           if(this.usersRegisterForm.valid){
                this.clicksubmited=false;
                console.log('validmiş be');

            this.registerService.post({
              email:this.email.value,
              password:this.password.value
            }).subscribe(data => {
              console.log(data);
            },err => console.log(err));

            this.name.setValue('');
            this.surname.setValue('');
            this.password.setValue('');
            this.email.setValue('');

            this.usersRegisterForm.reset();

            this.succsesfuly=true;

           }else{

                                console.log('valid değilmiş be');

                                if(this.name.errors?.required){
                                  this.error.push('name is required');
                                }

                                if(this.surname.errors?.required){
                                  this.error.push('surname is required');
                                }

                                if(this.email.errors?.required){
                                  this.error.push('email is required');
                                }else if(this.email.errors?.email){
                                  this.error.push('must be in email format');
                                }

                                if(this.password.errors?.required){
                                  this.error.push('password is required');
                                }else if(this.email.errors?.email){
                                  this.error.push('password must be at least 5 characters');
                                }
                                console.log(this.error);

           }
  }



  ngOnInit(): void {
  }

}
