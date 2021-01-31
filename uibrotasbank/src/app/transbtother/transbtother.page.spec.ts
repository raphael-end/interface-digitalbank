import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransbtotherPage } from './transbtother.page';

describe('TransbtotherPage', () => {
  let component: TransbtotherPage;
  let fixture: ComponentFixture<TransbtotherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransbtotherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransbtotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
