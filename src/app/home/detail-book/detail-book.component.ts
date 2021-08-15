import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoksgetService } from '../booksall/boksget.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  bookİD:number;
  books:any;
constructor(private route:ActivatedRoute,private bookseget:BoksgetService) {
  route.paramMap.subscribe(data=>{
    this.bookİD= +data.get('id');

    bookseget.get().subscribe((dat:any[])=>{
     this.books=dat.find(iteem=> iteem.id==this.bookİD);
   });
  });

  
}

  ngOnInit(): void {
  }

}
