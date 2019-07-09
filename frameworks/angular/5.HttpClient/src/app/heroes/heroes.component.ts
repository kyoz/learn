import { Component } from '@angular/core';
import { HeroService } from './heroes.service';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface Hero {
  id: number;
  name: string;
};

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  searchTerm$: Subject<string> = new Subject<string>();

  constructor(public heroAPI: HeroService) {
    this.registerForHeroSearch();
  }

  addHero(heroName: string) {
    if (heroName === undefined || heroName.length === 0) {
      return;
    }

    this.heroAPI.addHero({
      id: undefined,
      name: heroName
    }).subscribe(res => {},
      error => {
        alert(`Can't add new hero !`);
        console.error(error);
      },
      () => {
        this.heroAPI.refresh();
      });
  }

  updateHero(hero: Hero) {
    if (hero.name === undefined || hero.name.length === 0) {
      return;
    }

    this.heroAPI.updateHero(hero).subscribe(res => {},
      error => {
        alert(`Can't update hero !`);
        console.error(error);
      },
      () => {
        this.heroAPI.refresh();
      });
  }

  deleteHero(heroId: number) {
    if (heroId === undefined) {
      return;
    }

    this.heroAPI.deleteHero(heroId).subscribe(res => {},
      error => {
        alert(`Can't delete hero !`);
        console.error(error);
      },
      () => {
        this.heroAPI.refresh();
      });
  }

  registerForHeroSearch() {
    this.searchTerm$.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(term => {
      if (term && term.length > 0) {
        this.heroAPI.searchHeroes(term).subscribe(res => {
          console.log(res);
        },
        error => {
          alert(`Can't search hero !`);
          console.error(error);
        },
        () => {
          this.heroAPI.isLoading = false;
        });
      }
    });
  }
}


