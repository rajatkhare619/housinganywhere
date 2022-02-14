import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailsComponent } from './place-details.component';
import { ProfilesService } from '../services/profiles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Place } from '../shared/place';

describe('PlaceDetailsComponent', () => {
  let component: PlaceDetailsComponent;
  let fixture: ComponentFixture<PlaceDetailsComponent>;
  let profilesService: ProfilesService;
  let mockPlace: Place = {
    name: 'Abadango',
    type: 'Cluster',
    dimension: 'unknown',
    residents: ['https://rickandmortyapi.com/api/character/6'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlaceDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailsComponent);
    component = fixture.componentInstance;
    profilesService = TestBed.inject(ProfilesService);
    spyOn(profilesService, 'getPlaceDetails').and.returnValue(of(mockPlace));
    spyOn(profilesService, 'getCharacter').and.returnValue(of('Rick'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the place details and residents list', () => {
    component.open('https://rickandmortyapi.com/api/location/3');
    expect(component.place).toEqual(mockPlace);
    expect(component.residents).toEqual(['Rick']);
  });
});
