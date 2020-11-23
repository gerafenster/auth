import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoParticipantePage } from './evento-participante.page';

describe('EventoParticipantePage', () => {
  let component: EventoParticipantePage;
  let fixture: ComponentFixture<EventoParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
