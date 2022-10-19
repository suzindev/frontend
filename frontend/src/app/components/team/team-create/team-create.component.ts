import { Team } from './../team.model';
import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team: Team = {
    nome: 'Time Teste',
    sigla: 'TT',
    forca: 1
  }

  constructor(private teamService: TeamService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createTeam(): void {
    this.teamService.create(this.team).subscribe(() => {
      this.teamService.showMessage("Time criado!")
      this.router.navigate(['/teams'])
    })
  }

  cancel(): void {
    this.router.navigate(['/teams'])
  }
}
