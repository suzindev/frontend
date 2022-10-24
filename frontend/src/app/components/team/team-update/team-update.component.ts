import { Team } from './../team.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {

  team: Team

  constructor(
    private teamServico: TeamService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.teamServico.readById(id).subscribe(team => {
      this.team = team;
    });
  }

  updateTeam(): void {
    this.teamServico.update(this.team).subscribe(() => {
      this.teamServico.showMessage('Time atualizado com sucesso!')
      this.router.navigate(['/teams']);
    })
  }

  cancel(): void {
    this.router.navigate(['/teams']);
  }
}
