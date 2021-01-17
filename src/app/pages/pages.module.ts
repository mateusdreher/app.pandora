import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectNumberComponent } from './select-number/select-number.component';
import { ViewNumbersComponent } from './view-numbers/view-numbers.component';



@NgModule({
  declarations: [LandingPageComponent, SelectNumberComponent, ViewNumbersComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
