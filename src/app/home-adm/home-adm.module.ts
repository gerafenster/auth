import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeADMPageRoutingModule } from './home-adm-routing.module';

import { HomeADMPage } from './home-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeADMPageRoutingModule
  ],
  declarations: [HomeADMPage]
})
export class HomeADMPageModule {}
