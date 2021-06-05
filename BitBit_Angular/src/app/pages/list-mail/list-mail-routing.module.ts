import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMailPage } from './list-mail.page';

const routes: Routes = [
  {
    path: '',
    component: ListMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMailPageRoutingModule {}
