import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarianLoginControl } from '../librarian-login-control';

@Component({
  selector: 'app-librarian-login',
  templateUrl: './librarian-login.component.html',
  styleUrls: ['./librarian-login.component.css']
})
export class LibrarianLoginComponent implements OnInit {

  constructor(private router?:Router,private route?:ActivatedRoute,private cont?:LibrarianLoginControl) { }

  succsesLogin:boolean=false;

  errorC:boolean=false;


  password:FormControl=new FormControl('',Validators.required);

  loginClick(){
    if(this.password.valid){
           console.log('adsgdgsd');
           this.cont.control=(this.password.value as string);
              this.router.navigate(['../librarian'],{relativeTo: this.route});
              this.errorC=true;
    }else{
      this.errorC=true;
    }
  }



  ngOnInit(): void {
  }

}
