import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestasGrupoPage } from './encuestas-grupo.page';

describe('EncuestasGrupoPage', () => {
  let component: EncuestasGrupoPage;
  let fixture: ComponentFixture<EncuestasGrupoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasGrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
