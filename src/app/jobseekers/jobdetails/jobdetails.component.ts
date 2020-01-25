import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
@Input()titles
@Input()domain1
@Input()domain2
@Input()domain3
@Input()domain4
@Input() domain5
@Input()domain6
@Input()view
@Input()num1
@Input()num2
@Input()num3
@Input()num4
@Input()num5
@Input()num6


  constructor() { }

  ngOnInit() {
  }

}
