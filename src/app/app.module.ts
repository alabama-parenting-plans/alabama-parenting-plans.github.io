import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'src/home/home.module';
import { ParentingPlansModule } from 'src/parenting-plans/parenting-plans.module';
import { AboutModule } from 'src/about/about.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from 'src/shared/shared-components.module';
import { ModelFormModule } from 'src/model-form/model-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ParentingPlansModule,
    AboutModule,
    ModelFormModule,
    FontAwesomeModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
