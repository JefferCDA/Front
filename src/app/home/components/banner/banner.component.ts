import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/banner/banner1.jpg',
    'assets/images/banner/banner2.jpg',
    'assets/images/banner/banner3.jpg',
  ];
  

  constructor() { }


  ngOnInit(): void {
  }

}
