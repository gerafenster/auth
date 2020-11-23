import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeADMPage } from './home-adm.page';

const routes: Routes = [
  {
    path: '',
    component: HomeADMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeADMPageRoutingModule {}
