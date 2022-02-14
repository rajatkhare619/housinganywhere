import { Component, OnInit } from '@angular/core';
import { from, mergeMap, Observable, toArray } from 'rxjs';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent {
  displaySidebar = false;
  episodeList$!: Observable<string[]>;

  constructor(private profilesService: ProfilesService) {}

  open(episodeURLs: string[]) {
    this.episodeList$ = from(episodeURLs).pipe(
      mergeMap(
        (episodeURL: string) => this.profilesService.getEpisode(episodeURL),
        10
      ),
      toArray()
    );
    this.displaySidebar = true;
  }
}
