import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes/agentes.component'

const routes: Routes = [
  {
    path: 'agentes',
    component : AgentesComponent
  },
  {
    path: '', redirectTo: '/agentes', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
