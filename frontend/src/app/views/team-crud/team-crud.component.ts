import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-crud',
  templateUrl: './team-crud.component.html',
  styleUrls: ['./team-crud.component.css']
})
export class TeamCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Time',
      icon: 'sports_soccer',
      routerUrl: '/teams'
    }
  }

  ngOnInit(): void {
  }

  navigateToTeamCreate(): void {
    this.router.navigate(['/teams/create'])
  }
}
