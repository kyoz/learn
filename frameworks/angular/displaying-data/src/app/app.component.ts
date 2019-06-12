import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>

    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>

    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes: Hero[];

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Kyoz'),
      new Hero(2, 'Zed'),
      new Hero(3, 'Riven'),
      new Hero(4, 'Caitlyn')
    ];
    this.myHero = this.heroes[0];
  }
}
