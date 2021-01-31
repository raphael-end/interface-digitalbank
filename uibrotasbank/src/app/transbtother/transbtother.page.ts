import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transbtother',
  templateUrl: './transbtother.page.html',
  styleUrls: ['./transbtother.page.scss'],
})
export class TransbtotherPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
