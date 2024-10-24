import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'evaluaciones',
    loadChildren: () => import('./evaluaciones/evaluaciones.module').then( m => m.EvaluacionesPageModule)
  },
  {
    path: 'encuesta-docente',
    loadChildren: () => import('./encuesta-docente/encuesta-docente.module').then( m => m.EncuestaDocentePageModule)
  },
  {
    path: 'encuesta-alumno',
    loadChildren: () => import('./encuesta-alumno/encuesta-alumno.module').then( m => m.EncuestaAlumnoPageModule)
  },
  {
    path: 'instituciones',
    loadChildren: () => import('./instituciones/instituciones.module').then( m => m.InstitucionesPageModule)
  },
  {
    path: 'encuestas-grupo',
    loadChildren: () => import('./encuestas-grupo/encuestas-grupo.module').then( m => m.EncuestasGrupoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
