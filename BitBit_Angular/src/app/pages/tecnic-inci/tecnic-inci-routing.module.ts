import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicInciPage } from './tecnic-inci.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicInciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicInciPageRoutingModule {}
