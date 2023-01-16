import { Component, OnInit } from '@angular/core';
import { Rooms } from './interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  listOne: Rooms[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listOne = [
      {
        img: '../../../assets/images/room1.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
      {
        img: '../../../assets/images/room2.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
      {
        img: '../../../assets/images/room3.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
      {
        img: '../../../assets/images/room4.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
      {
        img: '../../../assets/images/room5.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
      {
        img: '../../../assets/images/room6.png',
        title: '2578 Folsom street, san francisco, CA, 94110',
        type: 'Private Room',
        price: '$1200/month',
        bed: '../../../assets/images/Bed.svg',
        shower: '../../../assets/images/Shower.svg',
        symbol: '../../../assets/images/Size.svg',
        bedNumber: 4,
        showerNumber: 2,
        symbolNumber: 2,
      },
    ];
  }
}
