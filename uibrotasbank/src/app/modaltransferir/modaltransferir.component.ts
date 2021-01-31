import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltransferir',
  templateUrl: './modaltransferir.component.html',
  styleUrls: ['./modaltransferir.component.scss'],
})
export class ModaltransferirComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
