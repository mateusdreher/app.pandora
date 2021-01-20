import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import { ButtonCancelComponent } from './button-cancel/button-cancel.component';
import { ImageComponent } from './image/image.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TextComponent,
    ButtonConfirmComponent,
    ButtonCancelComponent,
    ImageComponent,
    NotFoundComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [
    TextComponent,
    ButtonCancelComponent,
    ButtonConfirmComponent,
    ImageComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
