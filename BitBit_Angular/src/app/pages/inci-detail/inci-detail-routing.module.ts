import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InciDetailPage } from './inci-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InciDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InciDetailPageRoutingModule {}
