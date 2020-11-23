import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoEventoPage } from './novo-evento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoEventoPageRoutingModule {}
