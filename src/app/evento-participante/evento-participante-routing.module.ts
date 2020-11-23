import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoParticipantePage } from './evento-participante.page';

const routes: Routes = [
  {
    path: '',
    component: EventoParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoParticipantePageRoutingModule {}
