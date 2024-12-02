import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgendasComponent } from './table-agendas.component';

describe('TableAgendasComponent', () => {
  let component: TableAgendasComponent;
  let fixture: ComponentFixture<TableAgendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAgendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
