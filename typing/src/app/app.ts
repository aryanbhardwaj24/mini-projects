import { Component, signal } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('typing');

  randomSentence = faker.lorem.sentence();
}
