import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';


import {RouterModule} from '@angular/router';
import { myroutes } from './app-route';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(myroutes) ],
  declarations: [ AppComponent, StudentComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
