import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-child',
  templateUrl: './detail-child.component.html',
  styleUrls: ['./detail-child.component.css']
})
export class DetailChildComponent implements OnInit {
    @Input() getbook;
  constructor() { }

  ngOnInit(): void {
  }

}
