import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransbtbPageRoutingModule } from './transbtb-routing.module';

import { TransbtbPage } from './transbtb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransbtbPageRoutingModule
  ],
  declarations: [TransbtbPage]
})
export class TransbtbPageModule {}
