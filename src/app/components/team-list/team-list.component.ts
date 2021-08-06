import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams!: Team[];
  query = '';

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((response: { teams: Team[] }) => {
      this.teams = response.teams;
    });
  }

}
