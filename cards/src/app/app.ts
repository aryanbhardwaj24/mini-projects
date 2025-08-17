import { Component, signal } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cards');

  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageURL: 'images/tree.jpeg',
      content: 'Saw this awesome tree during my hike today',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountain',
      imageURL: 'images/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking',
      imageURL: 'images/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
