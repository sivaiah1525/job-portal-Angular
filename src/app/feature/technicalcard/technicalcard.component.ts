import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technicalcard',
  templateUrl: './technicalcard.component.html',
  styleUrls: ['./technicalcard.component.css']
})
export class TechnicalcardComponent implements OnInit {
      @Input() image
      @Input() title
      @Input() para
      @Input() time
      @Input() location
      @Input() button
  constructor() { }

  ngOnInit() {
  }

}