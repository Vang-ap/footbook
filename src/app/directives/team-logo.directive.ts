import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Team } from 'src/models/team';

@Directive({
  selector: '[appTeamLogo]'
})
export class TeamLogoDirective implements OnInit {
  @Input('appTeamLogo') team!: Team;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.team) {
      this.elementRef.nativeElement.setAttribute('src', this.team.strTeamBadge);
      this.elementRef.nativeElement.setAttribute('alt', this.team.strTeam);
    }
  }
}
