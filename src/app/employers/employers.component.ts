import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

   companylist=[
     {
       image:"assets/emplogo1.jpg",
       link:"#"
     },
     {
      image:"assets/emplogo2.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo3.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo4.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo5.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo6.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo7.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo8.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo9.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo10.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo11.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo12.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo3.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo14.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo15.jpg",
      link:"#"
    },
    {
      image:"assets/emplogo16.jpg",
      link:"#"
    }
     
   ]
  constructor() { }

  ngOnInit() {
  }

}
