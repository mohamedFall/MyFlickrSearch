import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlickrOutput } from '../interfaces/flickr-output';
import { FlickrPhoto } from '../interfaces/flickr-photo';
import {Observable} from 'rxjs';
import {FlickrImageInfo} from '../interfaces/flickr-image-info';

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

    return this.getPhotos(url + params);
  }

  getInfo(photoId: string): Observable<any> {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&';
    const params = `api_key=${environment.flickr.key}&photo_id=${photoId}&format=json&nojsoncallback=1`;

    return this.http.get(url + params).pipe(map((res: FlickrImageInfo) => {
      const imageInfo = res.photo;
      const photo = {
        id: imageInfo.id,
        url: `https://live.staticflickr.com/${imageInfo.server}/${imageInfo.id}_${imageInfo.secret}.jpg`,
        title: imageInfo.title._content,
        description: imageInfo.description._content,
        owner: imageInfo.owner,
        comments: imageInfo.comments
      };
      console.log(imageInfo);
      return photo;
    }));
  }

  getUserPhotos(userId: string): Observable<any> {
    // make more intuitive by generating random images
    const randomPage = Math.floor((Math.random() * 10) + 1);
    console.log(randomPage);
    const url = 'https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&';
    const params = `api_key=${environment.flickr.key}&user_id=${userId}&per_page=4&page=${randomPage}&format=json&nojsoncallback=1`;

    return this.getPhotos(url + params);
  }

  getPhotos(url: string): Observable<any> {
    console.log(url);
    return this.http.get(url).pipe(map((res: FlickrOutput) => {
      const urlArray = [];
      console.log(res);
      res.photos.photo.forEach((photo: FlickrPhoto) => {
        const imageObject = {
          id: `${photo.id}`,
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          title: photo.title
        };
        urlArray.push(imageObject);
      });
      return urlArray;
    }));
  }


}
