import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { EpisodesComponent } from '../episodes/episodes.component';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { Character } from '../shared/character';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: Character;
  @ViewChild(PlaceDetailsComponent)
  placeDetails!: PlaceDetailsComponent;
  @ViewChild(EpisodesComponent) episodes!: EpisodesComponent;

  constructor() {}

  showPlaceDetails(placeURL: string) {
    this.placeDetails.open(placeURL);
  }

  showEpisodes(episodeURLs: string[]) {
    this.episodes.open(episodeURLs);
  }
}
