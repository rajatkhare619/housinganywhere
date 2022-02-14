import { TestBed } from '@angular/core/testing';

import { ProfilesService } from './profiles.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProfilesService', () => {
  let service: ProfilesService;
  let httpMock: HttpTestingController;
  let mockCharacters = [
    {
      name: 'Antenna Morty',
      status: 'Alive',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/28',
      ],
      url: 'https://rickandmortyapi.com/api/character/18',
      created: '2017-11-04T22:25:29.008Z',
    },
    {
      id: 19,
      name: 'Antenna Rick',
      status: 'unknown',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'unknown',
        url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/19',
      created: '2017-11-04T22:28:13.756Z',
    },
    {
      id: 20,
      name: 'Ants in my Eyes Johnson',
      status: 'unknown',
      species: 'Human',
      type: 'Human with ants in his eyes',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Interdimensional Cable',
        url: 'https://rickandmortyapi.com/api/location/6',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/8'],
      url: 'https://rickandmortyapi.com/api/character/20',
      created: '2017-11-04T22:34:53.659Z',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProfilesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all characters', () => {
    const responseData = {
      results: mockCharacters,
    };
    const page = 1;
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;

    service.getAllCharacters(page).subscribe((characters) => {
      expect(characters).toEqual(mockCharacters);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(responseData);
    httpMock.verify();
  });
});
