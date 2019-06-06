import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Kyoz' },
      { id: 2, name: 'Saitama' },
      { id: 3, name: 'Tatsumaki' },
      { id: 4, name: 'Genos' },
      { id: 5, name: 'King' },
      { id: 6, name: 'Fubuki' },
      { id: 7, name: 'Bang' },
      { id: 8, name: 'Boom' },
      { id: 9, name: 'Levi' },
      { id: 10, name: 'Orochi' }
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
