import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { FlickrService } from './services/flickr.service';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ImageInfoComponent } from './image-info/image-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchImagesComponent},
  { path: 'image/:id', component: ImageInfoComponent },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchImagesComponent,
    ImageInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
