import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TeamCrudComponent } from './views/team-crud/team-crud.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "teams",
    component: TeamCrudComponent
  },
  {
    path: "teams/create",
    component: TeamCreateComponent
  },
  {
    path: "teams/update/:id",
    component: TeamUpdateComponent
  },
  {
    path: "teams/delete/:id",
    component: TeamDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
