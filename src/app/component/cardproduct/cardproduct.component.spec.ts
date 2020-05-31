import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardproductComponent } from './cardproduct.component';

describe('CardproductComponent', () => {
  let component: CardproductComponent;
  let fixture: ComponentFixture<CardproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardproductComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
