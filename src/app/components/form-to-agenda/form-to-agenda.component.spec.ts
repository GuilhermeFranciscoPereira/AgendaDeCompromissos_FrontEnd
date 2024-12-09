import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formToAgendaComponent } from './form-to-agenda.component';

describe('formToAgendaComponent', () => {
  let component: formToAgendaComponent;
  let fixture: ComponentFixture<formToAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [formToAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formToAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
