import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaDocentePageRoutingModule } from './encuesta-docente-routing.module';

import { EncuestaDocentePage } from './encuesta-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaDocentePageRoutingModule
  ],
  declarations: [EncuestaDocentePage]
})
export class EncuestaDocentePageModule {}
