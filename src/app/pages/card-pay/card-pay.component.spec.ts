import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardPayComponent } from './card-pay.component';

describe('CardPayComponent', () => {
  let component: CardPayComponent;
  let fixture: ComponentFixture<CardPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
