import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeUsersPage } from './home-users.page';

describe('HomeUsersPage', () => {
  let component: HomeUsersPage;
  let fixture: ComponentFixture<HomeUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
