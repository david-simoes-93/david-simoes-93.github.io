import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.html',
  styleUrls: ['./career-card.css'], // Corrigi de styleUrl para styleUrls
  standalone: false,
})
export class CareerCard {
  @Input() media: MediaItem[] = [];
  @Input() title!: string;
  @Input() items: SafeHtml[] = [];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    if (this.currentIndex < this.media.length - 1) this.currentIndex++;
  }
}
