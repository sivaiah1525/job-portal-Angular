import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  constructor() { }
@Input() image 
@Input() link
@Input() para
@Input() title
  ngOnInit() {
  }

}
