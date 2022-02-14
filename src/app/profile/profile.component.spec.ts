import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Character } from '../shared/character';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { EpisodesComponent } from '../episodes/episodes.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockProfile: Character = {
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    location: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2',
    },
    name: 'Abadango Cluster Princess',
    origin: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2,',
    },
    species: 'Alien',
    status: 'Alive',
  };

  @Component({
    selector: 'app-place-details',
    template: '',
    providers: [
      {
        provide: PlaceDetailsComponent,
        useClass: MockPlaceDetailsComponent,
      },
    ],
  })
  class MockPlaceDetailsComponent {
    open() {}
  }

  @Component({
    selector: 'app-episodes',
    template: '',
    providers: [
      {
        provide: EpisodesComponent,
        useClass: MockEpisodesComponent,
      },
    ],
  })
  class MockEpisodesComponent {
    open() {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        MockPlaceDetailsComponent,
        MockEpisodesComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.profile = mockProfile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the place details sidebar', () => {
    let placeDetailsSpy = spyOn(component.placeDetails, 'open');
    component.showPlaceDetails('abc');
    expect(placeDetailsSpy).toHaveBeenCalledWith('abc');
  });

  it('should show the episodes sidebar', () => {
    let placeDetailsSpy = spyOn(component.episodes, 'open');
    component.showEpisodes(['abc', 'xyz']);
    expect(placeDetailsSpy).toHaveBeenCalledWith(['abc', 'xyz']);
  });
});
