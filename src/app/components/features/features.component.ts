import { Component, OnInit } from '@angular/core';
import { Features } from './interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor() {}

  features: Features[] = [];
  ngOnInit(): void {
    this.features = [
      {
        name: 'Pay as Little as possible!',
        img: '../../../assets/images/pay.png',
      },
      {
        name: 'Enjoy wisdom of community!',
        img: '../../../assets/images/community.png',
      },
      {
        name: "Let's somebody elsetake care of Landlord!",
        img: '../../../assets/images/landlord.png',
      },
      {
        name: 'Enjoy peaceful Environment!',
        img: '../../../assets/images/peaceful.png',
      },
      {
        name: 'Stay Safe! Save Money!',
        img: '../../../assets/images/save.png',
      },
      {
        name: 'Pay for what you use !',
        img: '../../../assets/images/what-you-use.png',
      },
    ];
  }
}
