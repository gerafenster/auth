import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovosParticipantesPage } from './novos-participantes.page';

const routes: Routes = [
  {
    path: '',
    component: NovosParticipantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovosParticipantesPageRoutingModule {}
