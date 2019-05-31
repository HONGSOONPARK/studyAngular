import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '캡틴 아메리카' },
      { id: 12, name: '헐크' },
      { id: 13, name: '스파이더맨' },
      { id: 14, name: '팔콘' },
      { id: 15, name: '윈터솔져' },
      { id: 16, name: '블랙 위도우' },
      { id: 17, name: '호크아이' },
      { id: 18, name: '닥터 스트레인지' },
      { id: 19, name: '블랙팬서' },
      { id: 20, name: '토르' },
      { id: 21, name: '스타로드' },
      { id: 22, name: '그루트' },
      { id: 23, name: '드랙스' },
      { id: 24, name: '앤트맨' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
