import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { httpInterceptorProviders } from '../interceptors';
import { AppRoutingModule } from '../app-routing.module';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [
     httpInterceptorProviders,
     { provide: LOCALE_ID, useValue: 'fr-FR' }    
  ]
})
export class AppModule { }
