import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { ParentingPlansComponent } from './parenting-plans.component';
import { GreenComponent } from './plans/green/green.component';
import { BlueComponent } from './plans/blue/blue.component';
import { RedComponent } from './plans/red/red.component';
import { ParentingPlansRoutingModule } from './parenting-plans-routing.module';
import { PurpleComponent } from './plans/purple/purple.component';
import { SharedComponentsModule } from 'src/shared/shared-components.module';
import { Plan } from './plans/plan';
import { AgeComponent } from './age.component';
import { UniqueComponent } from './plans/unique/unique.component';
import { ReunificationComponent } from './plans/reunification/reunification.component';

@NgModule({
  declarations: [
    ParentingPlansComponent,
    GreenComponent,
    BlueComponent,
    RedComponent,
    PurpleComponent,
    AgeComponent,
    UniqueComponent,
    ReunificationComponent
  ],
  imports: [
    ParentingPlansRoutingModule,
    SharedComponentsModule,
    ModalModule.forRoot(),
    CommonModule
  ]
})
export class ParentingPlansModule { }
