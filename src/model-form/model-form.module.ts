import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelFormComponent } from './model-form.component';
import { SharedComponentsModule } from 'src/shared/shared-components.module';

@NgModule({
  declarations: [ModelFormComponent],
  imports: [
    SharedComponentsModule,
    CommonModule
  ]
})
export class ModelFormModule { }
