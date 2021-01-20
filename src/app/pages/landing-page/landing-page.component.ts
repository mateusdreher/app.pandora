import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    const carousel = document.getElementsByClassName('carousel')[0];

    var coord = carousel.getBoundingClientRect();
    window.scrollTo({left: coord.x, top : (coord.y + 380),  behavior: 'smooth'});
  }

  
}
