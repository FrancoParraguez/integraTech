import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestasGrupoPageRoutingModule } from './encuestas-grupo-routing.module';

import { EncuestasGrupoPage } from './encuestas-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestasGrupoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EncuestasGrupoPage]
})
export class EncuestasGrupoPageModule {}
