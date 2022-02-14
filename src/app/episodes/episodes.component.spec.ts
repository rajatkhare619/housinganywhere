import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesComponent } from './episodes.component';
import { ProfilesService } from '../services/profiles.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;
  let profilesService: ProfilesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EpisodesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    profilesService = TestBed.inject(ProfilesService);
    spyOn(profilesService, 'getEpisode').and.returnValue(of('episode1'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the episodes list', () => {
    component.open(['a', 'b']);
    component.episodeList$.subscribe((episodes) => {
      expect(episodes).toEqual(['episode1', 'episode1']);
    });
  });
});
