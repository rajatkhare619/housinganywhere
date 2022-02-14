import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Character } from '../shared/character';
import { Place } from '../shared/place';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page: number) {
    return this.http
      .get<{ results: Character[] }>(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      .pipe(map((data) => data.results));
  }

  getCharacter(characterURL: string) {
    return this.http
      .get<Character>(characterURL)
      .pipe(map((character: Character) => character.name));
  }

  getPlaceDetails(locationURL: string) {
    return this.http.get<Place>(locationURL);
  }

  getEpisode(episodesURL: string) {
    return this.http
      .get<{ name: string }>(episodesURL)
      .pipe(map((episode) => episode.name));
  }
}
