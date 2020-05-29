import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParalistComponent } from './paralist.component';

describe('ParalistComponent', () => {
  let component: ParalistComponent;
  let fixture: ComponentFixture<ParalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
