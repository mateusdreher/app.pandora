import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectNumberComponent } from './select-number/select-number.component';
import { ViewNumbersComponent } from './view-numbers/view-numbers.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodLuckComponent } from './good-luck/good-luck.component';
import { ViewPeoplesComponent } from './view-peoples/view-peoples.component';

@NgModule({
  declarations: [LandingPageComponent, SelectNumberComponent, ViewNumbersComponent, GoodLuckComponent, ViewPeoplesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
