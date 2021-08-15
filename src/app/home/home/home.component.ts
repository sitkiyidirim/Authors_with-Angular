import { Component, OnInit } from '@angular/core';
import { BoksgetService } from '../booksall/boksget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  outhers:any;
  constructor(private getservice: BoksgetService) {
       getservice.getOuthers().subscribe(outher=>{
         this.outhers=outher;
       })
   }



  ngOnInit(): void {
  }

}
