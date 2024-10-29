import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carroussel',
  templateUrl: './image-carroussel.component.html',
  styleUrls: ['./image-carroussel.component.css']
})
export class ImageCarrousselComponent implements OnInit {

  constructor() { }

  images: string[] = [];
  currentIndex: number = 0;
  fadingOut: boolean = false;

  ngOnInit() {
    // Initialiser les images
    this.images = [
      "/assets/img/fond-1.png",
      "/assets/img/fond-2.png",
      "/assets/img/fond-3.png",
      "/assets/img/fond-4.png"
    ];
  }

  prevImage() {
    this.fadingOut = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.fadingOut = false;
    }, 1000);
  }

  nextImage() {
    this.fadingOut = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.fadingOut = false;
    }, 1000);
  }
}
