import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserInciPageRoutingModule } from './user-inci-routing.module';

import { UserInciPage } from './user-inci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInciPageRoutingModule
  ],
  declarations: [UserInciPage]
})
export class UserInciPageModule {}
