import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransbtotherPageRoutingModule } from './transbtother-routing.module';

import { TransbtotherPage } from './transbtother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransbtotherPageRoutingModule
  ],
  declarations: [TransbtotherPage]
})
export class TransbtotherPageModule {}
