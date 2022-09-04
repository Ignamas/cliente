import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosHoyComponent } from './partidos-hoy.component';

describe('PartidosHoyComponent', () => {
  let component: PartidosHoyComponent;
  let fixture: ComponentFixture<PartidosHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidosHoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
