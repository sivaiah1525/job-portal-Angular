import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {
  profildetails = [
    {
      image: "/assets/jobcard1.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    }, {
      image: "/assets/jobcard2.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard3.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard4.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard5.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard1.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard2.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard3.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard4.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    },
    {
      image: "/assets/jobcard5.jpg",
      heading: "Jhon Doe",
      title: "Java Developer",
      location: "New York City, New York",
      salary:"$5000 / month",
      link:"#",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus, gravida tellus auctor,"
    }
  ]
  jobdetails = [
    {
      titles: "jobs by title",
      domain1: "Web Designer",
      domain2: "3D Graphic Designer",
      domain3: "Graphic Designer",
      domain4:"Electronics Technician",
      domain5:"Web / Graphic Designer",
      domain6: "Brand Manager",
      view:"view more",
      num1:"12",
      num2:"33",
      num3:"33",
      num4:"33",
      num5:"33",
      num6:"33"
    },
    {
      titles: "jobs by city",
      domain1: "New york",
      domain2: "Los angles",
      domain3: "Chicago",
      domain4:"Houston",
      domain5:"San Diego",
      domain6: "San Jose",
      view:"view more",
      num1:"12",
      num2:"33",
      num3:"33",
      num4:"12",
      num5:"555",
      num6:"44"
    },
    {
      titles: "jobs by experience",
      domain1: "Full Time/Permanent",
      domain2: "Contract33",
      domain3: "Part Time",
      domain4:"Internship",
      domain5:"Freelance",
      domain6:"Freelance",
      view:"view more",
      num1:"12",
      num2:"33",
      num3:"33",
      num4:"33",
      num5:"33",
      num6:"33"
    },
    {
      titles: " Jobs By Industry",
      domain1: "Information Technology",
      domain2: "Advertising/PR",
      domain3: "Services",
      domain4:"Health & Fitness",
      domain5:"Media/Communications",
      domain6: "Fashion",
      view:"view more",
      num1:"22",
      num2:"45",
      num3:"44",
      num4:"88",
      num5:"22",
      num6:"11"
    },
    {
      titles: "Top Companies",
      domain1: "Envato",
      domain2: "Themefores",
      domain3: "Graphic River",
      domain4:"Codecanyon",
      domain5:"Audio Jungle",
      domain6: "Videohive",
      view:"view more",
      num1:"12",
      num2:"33",
      num3:"33",
      num4:"33",
      num5:"33",
      num6:"33"
    },
    {
      titles: "Salary Range",
      domain1: "0 to $100",
      domain2: "$100 to $199",
      domain3: "$199 to $499",
      domain4:"$499 to $999",
      domain5:"$999 to $4999",
      domain6: "Above $4999",
      view:"view more",
      num1:"12",
      num2:"41",
      num3:"33",
      num4:"66",
      num5:"159",
      num6:"865"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
