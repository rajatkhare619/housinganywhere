import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilesService } from './services/profiles.service';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { EpisodesComponent } from './episodes/episodes.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PlaceDetailsComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    SidebarModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    ButtonModule,
    PaginatorModule,
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
