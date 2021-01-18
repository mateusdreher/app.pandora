import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectNumberComponent } from './select-number/select-number.component';
import { ViewNumbersComponent } from './view-numbers/view-numbers.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LandingPageComponent, SelectNumberComponent, ViewNumbersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbCarouselModule
  ]
})
export class PagesModule { }
