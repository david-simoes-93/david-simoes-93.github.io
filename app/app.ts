import { Component, signal } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false,
})
export class App {
  protected readonly title = signal('Portfolio');
}
