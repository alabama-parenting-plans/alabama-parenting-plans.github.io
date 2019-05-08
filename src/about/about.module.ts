import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedComponentsModule } from 'src/shared/shared-components.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class AboutModule { }
