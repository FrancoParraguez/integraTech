import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestasGrupoPage } from './encuestas-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestasGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestasGrupoPageRoutingModule {}
