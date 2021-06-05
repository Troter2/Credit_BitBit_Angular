import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailDetailPage } from './mail-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MailDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailDetailPageRoutingModule {}
