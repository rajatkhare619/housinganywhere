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

  /**
   * Open the sidebar with the place details
   * @param placeURL The place whose details will be shown
   */
  showPlaceDetails(placeURL: string) {
    this.placeDetails.open(placeURL);
  }

  /**
   * Show the list of episodes the character appears in
   * @param episodeURLs The URLs to fetch the episode information from
   */
  showEpisodes(episodeURLs: string[]) {
    this.episodes.open(episodeURLs);
  }
}
