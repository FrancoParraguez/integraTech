import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaDocentePage } from './encuesta-docente.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestaDocentePageRoutingModule {}
