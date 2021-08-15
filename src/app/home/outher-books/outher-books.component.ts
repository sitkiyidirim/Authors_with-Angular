import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoksgetService } from '../booksall/boksget.service';

@Component({
  selector: 'app-outher-books',
  templateUrl: './outher-books.component.html',
  styleUrls: ['./outher-books.component.css']
})
export class OutherBooksComponent implements OnInit {
       outhersName:string;
       books:any;
  constructor(private route:ActivatedRoute,private bookseget:BoksgetService) {
       route.paramMap.subscribe(data=>{
         this.outhersName= data.get('name');

         bookseget.get().subscribe((dat:any[])=>{
          this.books=dat.filter(iteem=> iteem.authors==this.outhersName);
        });
       });

       
  }

  ngOnInit(): void {

  }

}
