import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestaAlumnoPage } from './encuesta-alumno.page';

describe('EncuestaAlumnoPage', () => {
  let component: EncuestaAlumnoPage;
  let fixture: ComponentFixture<EncuestaAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
