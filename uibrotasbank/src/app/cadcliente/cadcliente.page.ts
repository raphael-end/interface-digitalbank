import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.page.html',
  styleUrls: ['./cadcliente.page.scss'],
})
export class CadclientePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
