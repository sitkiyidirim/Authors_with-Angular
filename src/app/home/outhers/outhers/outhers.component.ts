import { Component, OnInit } from '@angular/core';
import { OutherService } from '../outher.service';

@Component({
  selector: 'app-outhers',
  templateUrl: './outhers.component.html',
  styleUrls: ['./outhers.component.css']
})
export class OuthersComponent implements OnInit {

    gelendata:any[]=[];
    gelendataHeaders:string[]=[];

  constructor(private outhersService:OutherService) {
    
    this.outhersService.getBooks().subscribe((data:any[])=>{
      console.log(data);
      this.gelendata=data;

      this.gelendataHeaders=Object.keys(this.gelendata[1]);
      console.log(this.gelendataHeaders);


      this.gelendata.forEach(a=>{
        console.log(a[this.gelendataHeaders[1]]);
      })
    })
  }


      
  ngOnInit(): void {
    
  }

}
