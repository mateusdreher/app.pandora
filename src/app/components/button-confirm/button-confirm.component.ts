import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-confirm',
  templateUrl: './button-confirm.component.html',
  styleUrls: ['./button-confirm.component.scss']
})
export class ButtonConfirmComponent implements OnInit {

  @Input() text: string = '';
  @Input() type: string = 'button';
  constructor() { }

  ngOnInit(): void {
  }

}
