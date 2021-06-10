import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicInciPageRoutingModule } from './tecnic-inci-routing.module';

import { TecnicInciPage } from './tecnic-inci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicInciPageRoutingModule
  ],
  declarations: [TecnicInciPage]
})
export class TecnicInciPageModule {}
