import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { FlickrService } from './services/flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
