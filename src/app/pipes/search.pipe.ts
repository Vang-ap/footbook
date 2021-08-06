import { Pipe, PipeTransform } from '@angular/core';
import { Team } from 'src/models/team';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(teams: Team[], query: string): Team[] {
    if (!query) {
      return teams;
    }

    return teams.filter(team => {
      return team.strTeam.toUpperCase().includes(query.toUpperCase());
    });
  }

}
