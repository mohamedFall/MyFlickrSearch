import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  images = [];
  keyword: string;
  tags = '';

  constructor(private flickrService: FlickrService, private router: Router) { }

  ngOnInit(): void {
  }

  search(keyword: string, tags: string) {
    this.keyword = keyword.toLowerCase();
    this.tags = tags.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword, this.tags).subscribe(data => {
        this.images = data;
      });
    }
  }

  onScroll(): void {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword, this.tags).subscribe(data => {
        this.images = this.images.concat(data);
      });
    }
  }

  displayInfo(id: string) {
    this.router.navigate(['/image', id]);
  }
}
