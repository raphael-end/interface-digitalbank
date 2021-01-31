import { TransbtotherPage } from './../transbtother/transbtother.page';
import { TransbtbPage } from './../transbtb/transbtb.page';
import { TransbtbPageModule } from './../transbtb/transbtb.module';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranferir',
  templateUrl: './tranferir.page.html',
  styleUrls: ['./tranferir.page.scss'],
})
export class TranferirPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }
  async showmodaltransbtb(){
    const modal = await this.modalCtrl.create({
      component: TransbtbPage
    });
    modal.present();
  }
  async showmodaltransbtother(){
    const modal = await this.modalCtrl.create({
      component: TransbtotherPage
    });
    modal.present();
  }
  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
