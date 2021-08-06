import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TeamLogoDirective } from './directives/team-logo.directive';
import { MatMenuModule } from '@angular/material/menu';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamItemComponent,
    TeamDetailsComponent,
    SearchPipe,
    TeamLogoDirective,
    ContactComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
