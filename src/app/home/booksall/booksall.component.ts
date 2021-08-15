import { Component, OnInit } from '@angular/core';
import { BoksgetService } from './boksget.service';

@Component({
  selector: 'app-booksall',
  templateUrl: './booksall.component.html',
  styleUrls: ['./booksall.component.css']
})
export class BooksallComponent implements OnInit {
  books:any;
  constructor(private bookseget:BoksgetService) { 
       bookseget.get().subscribe(data=>{
         this.books=data;
       });
  }

  ngOnInit(): void {

  }

}
