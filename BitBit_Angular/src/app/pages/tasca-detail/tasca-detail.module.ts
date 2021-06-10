import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TascaDetailPageRoutingModule } from './tasca-detail-routing.module';

import { TascaDetailPage } from './tasca-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TascaDetailPageRoutingModule
  ],
  declarations: [TascaDetailPage]
})
export class TascaDetailPageModule {}
