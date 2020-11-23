import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoParticipantePageRoutingModule } from './evento-participante-routing.module';

import { EventoParticipantePage } from './evento-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoParticipantePageRoutingModule
  ],
  declarations: [EventoParticipantePage]
})
export class EventoParticipantePageModule {}
