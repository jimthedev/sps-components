import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { HeaderModule as BasicHeaderModule } from 'sps-base'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BasicHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
