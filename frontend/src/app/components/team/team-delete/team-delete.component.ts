import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from './../team.service';
import { Team } from './../team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {

  team: Team

  constructor(
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.teamService.readById(id).subscribe(team => {
      this.team = team
    })
  }

  deleteTeam(): void {
    this.teamService.delete(this.team.id).subscribe(() => {
      this.teamService.showMessage('Time excluído com sucesso!')
      this.router.navigate(['/teams'])
    })
  }

  cancel(): void {
    this.router.navigate(['/teams'])
  }
}
