import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalhelp',
  templateUrl: './modalhelp.component.html',
  styleUrls: ['./modalhelp.component.scss'],
})
export class ModalhelpComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
