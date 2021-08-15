import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImgValidators } from './image.validators';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  addActive:boolean=false;

  deleteActive:boolean=true;

  books:any[];

  errorS:string[]=[];

  isClickMi:boolean=false;

  registerSuccses:boolean=false;

  control:boolean=true;

  constructor(private service:LibraryService) {
        service.getBooks().subscribe((data:any[])=>{
            this.books=data;
        })


   }

   changeC(){
    this.registerSuccses=false;
   }

   booksRegisterForm=new FormGroup({
            name: new FormControl('',[Validators.required]),
            outhors: new FormControl('',[Validators.required]),
            catagoties: new FormControl('',[Validators.required]),
            imgUrl: new FormControl('',[Validators.required,ImgValidators.ımgControl])
   });

   name=this.booksRegisterForm.get('name');
   outhors=this.booksRegisterForm.get('outhors');
   catagoties=this.booksRegisterForm.get('catagoties');
   imgUrl=this.booksRegisterForm.get('imgUrl');

   booksRegisterClick(){
     this.isClickMi=true;
     this.errorS=[];


          if(this.booksRegisterForm.valid){
            console.log('buraya girdi');
              this.service.addBooks({
                name:this.name.value,
                authors:this.outhors.value,
                catagories:this.catagoties.value,
                imgUrl:this.imgUrl.value
              }).subscribe(data=>{
                  console.log(data);
              });

              this.name.setValue('');
              this.outhors.setValue('');
              this.catagoties.setValue('');
              this.imgUrl.setValue('');

              this.registerSuccses=true;
              this.control=false;
          }else{

                 if(this.name.errors?.required){
                  this.errorS.push('name is required');
                 }
                 if(this.outhors.errors?.required){
                  this.errorS.push('outhors is required');
                 }
                 if(this.catagoties.errors?.required){
                  this.errorS.push('catagoties is required');
                 }
                 if(this.imgUrl.errors?.required){
                  this.errorS.push('imgUrl is required');
                 }

                 if(this.imgUrl.errors?.erroroImg){
                  this.errorS.push('The extension of imgUrlmust be .jpg');
                 }
          }
   }

  booksDelete(id:number,p:any){
        this.service.deletetBooks(id).subscribe(data=>{
          console.log(data);
        });

      let index=  this.books.indexOf(p);
      this.books.splice(index,1);
  }




  addClick(){
         this.addActive=false;
         this.deleteActive=true;

         document.getElementById('add').classList.add('active');
         document.getElementById('delete').classList.remove('active');
  }
  deleteClick(){
    this.addActive=true;
    this.deleteActive=false;
         
    document.getElementById('add').classList.remove('active');
    document.getElementById('delete').classList.add('active');
  }

  ngOnInit(): void {
  }
}
