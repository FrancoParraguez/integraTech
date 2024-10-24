import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestaDocentePage } from './encuesta-docente.page';

describe('EncuestaDocentePage', () => {
  let component: EncuestaDocentePage;
  let fixture: ComponentFixture<EncuestaDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
