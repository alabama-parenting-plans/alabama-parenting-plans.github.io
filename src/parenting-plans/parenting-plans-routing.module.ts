import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentingPlansComponent } from './parenting-plans.component';
import { GreenComponent } from './plans/green/green.component';
import { BlueComponent } from './plans/blue/blue.component';
import { RedComponent } from './plans/red/red.component';
import { PurpleComponent } from './plans/purple/purple.component';
import { ReunificationComponent } from './plans/reunification/reunification.component';
import { UniqueComponent } from './plans/unique/unique.component';

import { AgeComponent } from './age.component';

const plansRoutes: Routes = [
  { path: '', component: ParentingPlansComponent },
  { path: 'parenting-plans/:color/age', component: AgeComponent },
  { path: 'parenting-plans/green/:id', component: GreenComponent },
  { path: 'parenting-plans/blue/:id', component: BlueComponent },
  { path: 'parenting-plans/purple/:id', component: PurpleComponent },
  { path: 'parenting-plans/red', component: RedComponent },
  { path: 'parenting-plans/reunification', component: ReunificationComponent},
  { path: 'parenting-plans/unique', component: UniqueComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(plansRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParentingPlansRoutingModule {}
