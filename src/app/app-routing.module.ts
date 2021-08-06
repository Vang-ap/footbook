import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'teams/team/:id',
    component: TeamDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
