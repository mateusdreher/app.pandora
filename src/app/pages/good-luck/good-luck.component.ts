import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-luck',
  templateUrl: './good-luck.component.html',
  styleUrls: ['./good-luck.component.scss']
})
export class GoodLuckComponent implements OnInit {

  number: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.number = params['number']
    });
  }

  ngOnInit(): void {
  }

}
