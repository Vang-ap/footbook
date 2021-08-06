import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from 'src/models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  getTeams(): Observable<{ teams: Team[] }> {
    const endpointUrl = `${environment.apiUrl}/search_all_teams.php?s=Soccer&c=France`;

    return this.httpClient.get<{ teams: Team[] }>(endpointUrl);
  }

  getTeam(teamId: string): Observable<{ teams: Team[] }> {
    const endpointUrl = `${environment.apiUrl}/lookupteam.php?id=${teamId}`;

    return this.httpClient.get<{ teams: Team[] }>(endpointUrl);
  }
}
