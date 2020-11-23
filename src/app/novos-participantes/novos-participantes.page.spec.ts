import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovosParticipantesPage } from './novos-participantes.page';

describe('NovosParticipantesPage', () => {
  let component: NovosParticipantesPage;
  let fixture: ComponentFixture<NovosParticipantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovosParticipantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovosParticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
