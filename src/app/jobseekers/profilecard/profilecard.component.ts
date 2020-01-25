import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {
@Input()image
@Input()heading
@Input()title
@Input()location
@Input()para
@Input() salary
@Input()link
  constructor() { }

  ngOnInit() {
  }

}
