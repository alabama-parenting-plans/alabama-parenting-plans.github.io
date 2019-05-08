import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { ParentingPlansComponent } from 'src/parenting-plans/parenting-plans.component';
import { AboutComponent } from 'src/about/about.component';
import { ModelFormComponent } from 'src/model-form/model-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parenting-plans', component: ParentingPlansComponent},
  { path: 'about', component: AboutComponent},
  { path: 'model-form', component: ModelFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
