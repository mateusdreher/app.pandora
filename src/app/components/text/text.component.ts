import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() text: string = '';
  @Input() fontSize: number = 14;
  @Input() fontColor: string = '#012147';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
