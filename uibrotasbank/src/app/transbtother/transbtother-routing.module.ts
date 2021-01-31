import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransbtotherPage } from './transbtother.page';

const routes: Routes = [
  {
    path: '',
    component: TransbtotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransbtotherPageRoutingModule {}
