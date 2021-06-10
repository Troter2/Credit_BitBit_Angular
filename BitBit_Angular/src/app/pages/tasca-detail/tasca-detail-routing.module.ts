import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TascaDetailPage } from './tasca-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TascaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TascaDetailPageRoutingModule {}
