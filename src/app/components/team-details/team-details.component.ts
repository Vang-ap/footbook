import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/models/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  team!: Team;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    const teamId = this.activatedRoute.snapshot.params.id;

    this.teamService.getTeam(teamId).subscribe((response: { teams: Team[] }) => {
      this.team = response.teams[0];
    })
  }
}
