import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import { ButtonCancelComponent } from './button-cancel/button-cancel.component';
import { ImageComponent } from './image/image.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    TextComponent,
    ButtonConfirmComponent,
    ButtonCancelComponent,
    ImageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent,
    ButtonCancelComponent,
    ButtonConfirmComponent,
    ImageComponent
  ]
})
export class ComponentsModule { }
