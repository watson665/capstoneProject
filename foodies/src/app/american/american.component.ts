import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.css']
})
export class AmericanComponent implements OnInit {
  truck = null;

  chooseTruck(americans) {
    this.truck = americans;
    console.log(americans);
  }

  constructor() { }

  ngOnInit(): void {
  }
  american = [
    {
      name: "Hot Mess Food Truck",
      image: " ",
      yelp: "https://www.yelp.com/biz/hot-mess-food-truck-columbus?osq=Hot+Mess+Food+Truck",
      website: "https://twitter.com/hotmessfoodtrck?lang=en"
    },
    {
      name: "The Cheesy Truck",
      image: "jdjdjdj",
      yelp: "",
      website: ""
    },
    {
      name: "The Tasty Good",
      image: "hfhfhf",
      yelp: "",
      website: ""
    },

  ]

}
