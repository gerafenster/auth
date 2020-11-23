import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeADMPage } from './home-adm.page';

describe('HomeADMPage', () => {
  let component: HomeADMPage;
  let fixture: ComponentFixture<HomeADMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeADMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeADMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
