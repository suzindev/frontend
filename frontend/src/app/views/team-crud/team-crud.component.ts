import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-crud',
  templateUrl: './team-crud.component.html',
  styleUrls: ['./team-crud.component.css']
})
export class TeamCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTeamCreate(): void {
    this.router.navigate(['/teams/create    '])
  }
}
