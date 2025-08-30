import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements-module';
import { CollectionsModule } from './collections/collections-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ElementsModule, CollectionsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('comps');
}
