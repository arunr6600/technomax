import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-content-service',
  templateUrl: './content-service.component.html',
  styleUrls: ['./content-service.component.scss']
})
export class ContentServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [

    {
      img:'../../assets/images/MaskGroup470.png',
      title:'Installation and Maintenance Services of Industrial Crane',
    },
    {
      img: '../../assets/images/498.png',
      title: 'Condition Monitoring and Machinery Diagnostic Services',
    },
    {
      img: '../../assets/images/501.png',
      title: 'Trading, Stocking and Distribution of Engineering Products',
    },
    {
      img: '../../assets/images/473.png',
      title: 'Stocking & Supply of Maintenance, Repair and Operational Spare Parts',
    },


  ]
  blogs =[
    {
      img:'../../assets/images/89.png',
      text:'Blog',
      date:'Jul 14, 2018',
      title:'Rising e-commerce and its impact on trucking'
    },
    {
      img: '../../assets/images/90.png',
      text: 'Blog',
      date: 'Jul 14, 2018',
      title: 'Oil and the impact of its cost fluctuation on Canadian trucking industry'
    },
  ]

}
