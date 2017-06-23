import { Component } from '@angular/core';
import { Image } from './model/image.model';

@Component({
  selector: 'app-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss']
})
export class SimpleCarouselComponent {
  public images = IMAGES;

  constructor() { }

}

// Loading images
let IMAGES: Image[] = [
  { 'title': 'Carousel one', 'url': '/assets/img/exampleOne.png' },
  { 'title': 'Carousel two', 'url': '/assets/img/exampleTwo.png' },
  { 'title': 'Carousel three', 'url': '/assets/img/exampleOne.png' },
  { 'title': 'Carousel four', 'url': '/assets/img/exampleTwo.png' },
  { 'title': 'Carousel five', 'url': '/assets/img/exampleOne.png' },
];
