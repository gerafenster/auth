import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoEventoPageRoutingModule } from './novo-evento-routing.module';

import { NovoEventoPage } from './novo-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoEventoPageRoutingModule
  ],
  declarations: [NovoEventoPage]
})
export class NovoEventoPageModule {}
