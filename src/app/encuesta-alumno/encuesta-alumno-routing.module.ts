import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaAlumnoPage } from './encuesta-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestaAlumnoPageRoutingModule {}
