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

  /**
   * Open the sidebar with the list of episodes
   * @param episodeURLs URLs with the episode details
   */
  open(episodeURLs: string[]) {
    this.episodeList$ = from(episodeURLs).pipe(
      mergeMap(
        (episodeURL: string) => this.profilesService.getEpisode(episodeURL),
        10 // Allow only 10 concurrent requests to avoid request failure
      ),
      toArray()
    );
    this.displaySidebar = true;
  }
}
