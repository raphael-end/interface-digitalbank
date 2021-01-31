import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transbtb',
  templateUrl: './transbtb.page.html',
  styleUrls: ['./transbtb.page.scss'],
})
export class TransbtbPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
