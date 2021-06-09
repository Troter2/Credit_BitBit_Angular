import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInciPage } from './user-inci.page';

const routes: Routes = [
  {
    path: '',
    component: UserInciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInciPageRoutingModule {}
