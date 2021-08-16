import { Component, OnInit } from '@angular/core';
import { OutherService } from '../../outhers/outher.service';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  gelendata:any[]=[];
  gelendataHeaders:string[]=[];

constructor(private outhersService:RepoService) {
  
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
