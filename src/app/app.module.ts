import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLayoutModule } from './my-layout/my-layout.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
