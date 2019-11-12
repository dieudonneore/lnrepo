import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { TaskComponent } from './task/task.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LoadingComponent } from './loading/loading.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskdetailsComponent,
    NotfoundpageComponent,
    LoadingComponent,
    routingComponents,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
