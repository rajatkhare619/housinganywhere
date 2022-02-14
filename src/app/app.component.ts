import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './services/profiles.service';
import { map, Observable } from 'rxjs';
import { Character } from './shared/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  characters$!: Observable<Character[]>;
  loading = false;
  totalRecords = 40;
  currentPage = 0;

  constructor(private profilesService: ProfilesService) {}

  ngOnInit() {
    this.characters$ = this.profilesService.getAllCharacters(1);
  }

  paginate(event: {
    first: number;
    page: number;
    pageCount: number;
    rows: number;
  }) {
    this.currentPage = event.first;
    this.totalRecords += 20;
    this.characters$ = this.profilesService.getAllCharacters(event.page + 1);
  }
}
