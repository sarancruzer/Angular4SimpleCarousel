import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleCarouselComponent } from './simple-carousel/simple-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
