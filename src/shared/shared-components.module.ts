import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageHeaderComponent } from './image-header/image-header.component';

@NgModule({
  declarations: [
    ImageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageHeaderComponent
  ]
})
export class SharedComponentsModule { }
