import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlickrOutput } from '../interfaces/flickr-output';
import { FlickrPhoto } from '../interfaces/flickr-photo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlickrService {
  lastKeyword: string;
  currentPage = 1;

  constructor(private http: HttpClient) { }

  search_keyword(keyword: string, tags: string): Observable<any> {
    if (this.lastKeyword === keyword) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    this.lastKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&tags=${tags}&text=${keyword}&format=json&nojsoncallback=1&per_page=16&page=${this.currentPage}`;

    console.log(url + params);

    return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
        const urlArray = [];
        res.photos.photo.forEach((photo: FlickrPhoto) => {
          const imageObject = {
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            title: photo.title
          };
          urlArray.push(imageObject);
        });
        return urlArray;
      }));
  }
}
