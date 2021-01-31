import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransbtbPage } from './transbtb.page';

describe('TransbtbPage', () => {
  let component: TransbtbPage;
  let fixture: ComponentFixture<TransbtbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransbtbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransbtbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
