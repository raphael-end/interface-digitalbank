import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.component.html',
  styleUrls: ['./modalperfil.component.scss'],
})
export class ModalperfilComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  
  close(){
    this.modalCtrl.dismiss();
  }
}
