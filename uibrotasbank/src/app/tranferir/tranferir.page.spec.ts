import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranferirPage } from './tranferir.page';

describe('TranferirPage', () => {
  let component: TranferirPage;
  let fixture: ComponentFixture<TranferirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranferirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
