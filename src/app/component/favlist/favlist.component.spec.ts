import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavlistComponent } from './favlist.component';

describe('FavlistComponent', () => {
  let component: FavlistComponent;
  let fixture: ComponentFixture<FavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavlistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
