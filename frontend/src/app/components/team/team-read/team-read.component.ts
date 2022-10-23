import { Team } from './../team.model';
import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-read',
  templateUrl: './team-read.component.html',
  styleUrls: ['./team-read.component.css']
})
export class TeamReadComponent implements OnInit {

  teams: Team[]
  displayedColums = ['id', 'nome', 'sigla', 'forca', 'action']

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.read().subscribe(teams => {
      this.teams = teams
    })
  }
}
