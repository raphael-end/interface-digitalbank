import { CadclientePage } from './../cadcliente/cadcliente.page';
import { TranferirPage } from './../tranferir/tranferir.page';
import { ModalperfilComponent } from './../modalperfil/modalperfil.component';
import { ModalhelpComponent } from './../modalhelp/modalhelp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalcadcartaoComponent } from '../modalcadcartao/modalcadcartao.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ModalhelpComponent, ModalperfilComponent, ModalcadcartaoComponent, TranferirPage, CadclientePage],
  entryComponents: [ModalhelpComponent, ModalperfilComponent,  ModalcadcartaoComponent, TranferirPage, CadclientePage]
})
export class HomePageModule {}
