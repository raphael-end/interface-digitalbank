import { ApiService } from './../service/api.service';
import { CadclientePage } from './../cadcliente/cadcliente.page';
import { TranferirPage } from './../tranferir/tranferir.page';
import { ModalhelpComponent } from './../modalhelp/modalhelp.component';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { Animation, AnimationController, Gesture, GestureController, GestureDetail, ModalController, Platform } from '@ionic/angular';
import { ModalperfilComponent } from '../modalperfil/modalperfil.component';
import { ModalcadcartaoComponent } from '../modalcadcartao/modalcadcartao.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocks') blocks: any;
  @ViewChild('background') background: any;
  @ViewChild('swipeDown') swipeDown: any;
  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'indicar amigos'},
    { icon: 'people-outline', text: 'Clientes'},
    { icon: 'phone-portrait-outline', text: 'Recarga de celular'},
    { icon: 'wallet-outline', text: 'Depositar'},
    { icon: 'options-outline', text: 'Ajustar limite'},
    { icon: 'help-circle-outline', text: 'Me ajuda'},
    { icon: 'barcode-outline', text: 'Pagar'},
    { icon: 'lock-open-outline', text: 'Bloquear cartão'},
    { icon: 'card-outline', text: 'Cartão virtual'},
  ];

  public slidesOptions: any = {slidesPerView: 3, freeMode: true};
  public itens: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda', click: '(click)="showmodal()"'},
    { icon: 'person-outline', text: 'Perfil', click: '(click)="showmodal()"'},
    { icon: 'cash-outline', text: 'Configurar conta', click: 'showmodal()'},
    { icon: 'card-outline', text: 'Configurar cartão', click: 'showmodal()'},
    { icon: 'phone-portrait-outline', text: 'Configurações do app', click:'google.com'},
  ];
  public initialstep: number = 0;
  private maxTranslate: number;
  private animation: Animation;
  private gesture: Gesture;
  public swiping: boolean = false;
  constructor( 
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private animationCrtl: AnimationController,
    private platform: Platform,
    private renderer: Renderer2,
    private gestureCrtl: GestureController
  ) {
    this.readData();
    this.maxTranslate = this.platform.height() - 200;
  }
  readData(){
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }
  async showmodalclient(){
    const modal = await this.modalCtrl.create({
      component: CadclientePage
    });
    modal.present();
  }

  async showmodaltrans(){
    const modal = await this.modalCtrl.create({
      component: TranferirPage
    });
    modal.present();
  }

  async showmodal(){
    const modal = await this.modalCtrl.create({
      component: ModalhelpComponent
    });
    modal.present();
  }

  async showmodalperfil(){
    const modal = await this.modalCtrl.create({
      component: ModalperfilComponent
    });
    modal.present();
  }
  
  async showmodalcadcard(){
    const modal = await this.modalCtrl.create({
      component: ModalcadcartaoComponent
    });
    modal.present();
  }

  ngAfterViewInit(){
    this.createAnimation();
    this.detectSwipe();
  }

  detectSwipe(){
    this.gesture = this.gestureCrtl.create({
      el: this.swipeDown.el,
      gestureName: 'swipe-down',
      threshold: 0,
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev)
    }, true);

    this.gesture.enable(true);
  }

  onMove(ev: GestureDetail) {
    if (!this.swiping) {
      this.animation.direction('normal').progressStart(true);
   
      this.swiping = true;
    }
    const step: number = this.getStep(ev);

    this.animation.progressStep(step);
    this.setBackgroundOpacity(step);

  }

  onEnd(ev: GestureDetail) {
    if(!this.swiping) return;

    this.gesture.enable(false);

    const step: number = this.getStep(ev);
    const shouldComplete: boolean = step > 0.5;

    this.animation.progressEnd(shouldComplete ? 1 : 0, step);

    this.initialstep = shouldComplete ? this.maxTranslate : 0;

    this.setBackgroundOpacity();
    this.swiping = false;
  }

  getStep(ev: GestureDetail): number{
      const delta: number = this.initialstep + ev.deltaY;

      return delta / this.maxTranslate;
  }

  toggleBlocks(){
    this.initialstep = this.initialstep === 0 ? this.maxTranslate : 0;

    this.gesture.enable(false);

    this.animation.direction(this.initialstep === 0 ? 'reverse' : 'normal').play();

    this.setBackgroundOpacity();
  }

  createAnimation(){
    this.animation = this.animationCrtl.create()
    .addElement(this.blocks.nativeElement)
    .duration(300)
    .fromTo('transform', 'translateY(0)', `translateY(${this.maxTranslate}px)`)
    .onFinish(() => this.gesture.enable(true));
  }

  setBackgroundOpacity(value: number = null){
    this.renderer.setStyle(this.background.nativeElement, 'opacity', value ? value : this.initialstep === 0 ? '0' : '1');
  }
  fixedBlocks(): boolean{
    return this.swiping || this.initialstep === this.maxTranslate;
  }
}
