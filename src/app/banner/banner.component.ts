import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  public carouselIndex: number;
  public carouselTitle: string;
  public carouselItems = [
    {
      title: 'Trading and Distribution',
      videoTitle: 'Solutions Engineered for Industries',
      details: 'We help you in obtaining the right engneering product...',
      imageSmall: '../../assets/images/banner1.png',
      imageLarge: 'https://cdn.corporatefinanceinstitute.com/assets/Industry.jpeg'
    },
    {
      title: 'Crane Services',
      videoTitle: 'Crane Services Solutions for Industries',
      details: 'We ensure your cranes maintain the hieghest life cycle values..',
      imageSmall: '../../assets/images/banner2.png',
      imageLarge: 'https://cdn.thomasnet.com/insights-images/fb967835-d98a-4eb9-aa06-be09f2b1ed12/750px.png'
    },
    {
      title: 'Condition Monitoring',
      videoTitle: 'Condition Monitoring',
      details: 'Routine monitoring for accurate diagnosis of equipment condition.',
      imageSmall:'../../assets/images/498.png',
      imageLarge: 'https://post.healthline.com/wp-content/uploads/2019/06/Female_Smiling_1200x628-facebook.jpg'
    }
  ];
  constructor() {}

  ngOnInit(): void {
        this.navTo(0);
  }
  navTo(index: number) {
    this.carouselIndex = index;
    this.carouselTitle = this.carouselItems[this.carouselIndex].videoTitle;
  }
}
