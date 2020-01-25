import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  details = [
    {
      icon: "assets/my-account.jpg",
      title: "Create An Account",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
    },
    {
      icon: "assets/searchicon.jpg",
      title: "Search Desired Job",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
    },
    {
      icon: "assets/resumeicon.png",
      title: "Send Your Resume",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
