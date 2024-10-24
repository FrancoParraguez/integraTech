import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaAlumnoPageRoutingModule } from './encuesta-alumno-routing.module';

import { EncuestaAlumnoPage } from './encuesta-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaAlumnoPageRoutingModule
  ],
  declarations: [EncuestaAlumnoPage]
})
export class EncuestaAlumnoPageModule {}
