import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToAddNewComponent } from './form-to-add-new.component';

describe('FormToAddNewComponent', () => {
  let component: FormToAddNewComponent;
  let fixture: ComponentFixture<FormToAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormToAddNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
