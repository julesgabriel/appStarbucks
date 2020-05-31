import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AideComponent } from './aide.component';

describe('AideComponent', () => {
  let component: AideComponent;
  let fixture: ComponentFixture<AideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
