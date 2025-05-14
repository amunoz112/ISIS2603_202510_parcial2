import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosModule } from './candidatos/candidatos.module';
import { HttpClientModule } from '@angular/common/http';
import { CandidatosRoutingModule } from './candidatos/candidatos-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatosModule,
    HttpClientModule,
    CandidatosRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
