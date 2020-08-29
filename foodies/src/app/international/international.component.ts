import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  international = [
    {
      name: "Taquitos Taco Truck",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/0awaqplQMzFH7xq2Xp3SHw/o.jpg",
      yelp: "https://www.yelp.com/biz_photos/taquitos-taco-truck-dublin",
      website: "https://www.facebook.com/taquitostruck/"
    },
    {
      name: "Schmidt’s Sausage Truck",
      image: "Image: https://www.schmidthaus.com/wp-content/uploads/2012/11/food-truck.jpg",
      yelp: "https://www.yelp.com/biz/schmidts-sausage-truck-columbus-3?osq=Schmidt%27s+Sausage+Truck",
      website: "https://www.schmidthaus.com/sausage-truck/"
    },
    {
      name: "Pitabilities",
      image: " https://s3-media0.fl.yelpcdn.com/bphoto/s7B6eq5uNVdtjMerKIIAfg/o.jpg",
      yelp: "https://www.yelp.com/biz/pitabilities-gahanna-2",
      website: "https://www.pitabilities.com/"
    },

  ]

}
