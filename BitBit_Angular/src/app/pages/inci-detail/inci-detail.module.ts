import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InciDetailPageRoutingModule } from './inci-detail-routing.module';

import { InciDetailPage } from './inci-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InciDetailPageRoutingModule
  ],
  declarations: [InciDetailPage]
})
export class InciDetailPageModule {}
