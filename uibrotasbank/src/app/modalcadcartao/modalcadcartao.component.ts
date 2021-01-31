import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalcadcartao',
  templateUrl: './modalcadcartao.component.html',
  styleUrls: ['./modalcadcartao.component.scss'],
})
export class ModalcadcartaoComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
