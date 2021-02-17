import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import { ImageComponent } from './image/image.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    TextComponent,
    ButtonConfirmComponent,
    ImageComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [
    TextComponent,
    ButtonConfirmComponent,
    ImageComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
