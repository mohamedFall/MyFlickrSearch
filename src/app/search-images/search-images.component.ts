import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../services/flickr.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  images = [];
  keyword: string;
  tags = '';

  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    this.tags = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword, this.tags).subscribe(data => {
        this.images = data;
      });
    }
  }

}
