import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovosParticipantesPageRoutingModule } from './novos-participantes-routing.module';

import { NovosParticipantesPage } from './novos-participantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovosParticipantesPageRoutingModule
  ],
  declarations: [NovosParticipantesPage]
})
export class NovosParticipantesPageModule {}
