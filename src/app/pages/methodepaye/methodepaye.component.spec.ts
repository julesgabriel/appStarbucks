import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MethodepayeComponent } from './methodepaye.component';

describe('MethodepayeComponent', () => {
  let component: MethodepayeComponent;
  let fixture: ComponentFixture<MethodepayeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodepayeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MethodepayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
