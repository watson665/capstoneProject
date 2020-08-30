import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.css']
})
export class AmericanComponent implements OnInit {
  american = [
    {
    name: "Hot Mess Food Truck",
      image: " ",
      yelp: "https://www.yelp.com/biz/hot-mess-food-truck-columbus?osq=Hot+Mess+Food+Truck",
      website: "https://twitter.com/hotmessfoodtrck?lang=en"
    },
    {
      name: "The Cheesy Truck",
      image: "https://thebreakfastgrubguy.files.wordpress.com/2013/06/101_1540.jpg",
      yelp: "https://www.yelp.com/biz/the-cheesy-truck-columbus-2?osq=The+Cheesy+Truck",
      website: "https://www.thecheesytruck.com/"
    },
    {
      name: "The Tasty Good",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/A7Z-6gMEX4d3pJLdLMmuNQ/l.jpg",
      yelp: "https://www.yelp.com/biz/the-tasty-good-columbus?osq=The+Tasty+Good",
      website: "https://www.facebook.com/thetastygood/"
    },

  ]

/*
  chooseTruck(americans) {
    this.truck = americans;
    console.log(americans);
  }
*/
  constructor() { }

  ngOnInit(): void {
  }
  /*
  american = [
    {
      name: "Hot Mess Food Truck",
      image: " ",
      yelp: "https://www.yelp.com/biz/hot-mess-food-truck-columbus?osq=Hot+Mess+Food+Truck",
      website: "https://twitter.com/hotmessfoodtrck?lang=en"
    },
    {
      name: "The Cheesy Truck",
      image: "https://thebreakfastgrubguy.files.wordpress.com/2013/06/101_1540.jpg",
      yelp: "https://www.yelp.com/biz/the-cheesy-truck-columbus-2?osq=The+Cheesy+Truck",
      website: "https://www.thecheesytruck.com/"
    },
    {
      name: "The Tasty Good",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/A7Z-6gMEX4d3pJLdLMmuNQ/l.jpg",
      yelp: "https://www.yelp.com/biz/the-tasty-good-columbus?osq=The+Tasty+Good",
      website: "https://www.facebook.com/thetastygood/"
    },

  ]*/

}
