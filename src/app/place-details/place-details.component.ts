import { Component, OnDestroy } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { mergeMap, Subscription, switchMap, tap, toArray } from 'rxjs';
import { Place } from '../shared/place';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent implements OnDestroy {
  displaySidebar = false;
  place!: Place;
  residents?: string[];
  loading = false;
  placeSubscription!: Subscription;

  constructor(private profilesService: ProfilesService) {}

  open(placeURL: string): void {
    this.loading = true;
    this.placeSubscription = this.profilesService
      .getPlaceDetails(placeURL)
      .pipe(
        tap((placeDetails) => (this.place = placeDetails)),
        switchMap((placeDetails: Place) => placeDetails.residents),
        mergeMap(
          (resident: string) => this.profilesService.getCharacter(resident),
          10
        ),
        toArray()
      )
      .subscribe((residents) => {
        this.loading = false;
        this.residents = residents;
      });
    this.displaySidebar = true;
  }

  ngOnDestroy() {
    if (this.placeSubscription) {
      this.placeSubscription.unsubscribe();
    }
  }
}
