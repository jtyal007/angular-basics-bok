import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import required for 2-way binding

import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({ // decorator - tells Angular that this is a Module
  declarations: [ // any new components that are used by the app needed to be declared in this array
    AppComponent,
    ComponentComponent,
    DatabindingComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // tells Angular which component needs to be loaded when Angular first starts 
})
export class AppModule { }
