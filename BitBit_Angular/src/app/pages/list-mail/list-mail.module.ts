import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMailPageRoutingModule } from './list-mail-routing.module';

import { ListMailPage } from './list-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMailPageRoutingModule
  ],
  declarations: [ListMailPage]
})
export class ListMailPageModule {}
