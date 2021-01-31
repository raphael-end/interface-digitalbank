import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranferirPage } from './tranferir.page';

const routes: Routes = [
  {
    path: '',
    component: TranferirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranferirPageRoutingModule {}
