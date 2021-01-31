import { TransbtotherPage } from './../transbtother/transbtother.page';
import { TransbtbPage } from './../transbtb/transbtb.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranferirPageRoutingModule } from './tranferir-routing.module';

import { TranferirPage } from './tranferir.page';
import { ModaltransferirComponent } from '../modaltransferir/modaltransferir.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranferirPageRoutingModule
  ],
  declarations: [TranferirPage, TransbtbPage, TransbtotherPage],
  entryComponents: [TranferirPage, TransbtbPage, TransbtotherPage]

})
export class TranferirPageModule {}
