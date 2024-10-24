import { Component } from '@angular/core';
import { InstitucionService } from '../services/institucion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.page.html',
  styleUrls: ['./instituciones.page.scss'],
})
export class InstitucionesPage {
  constructor(private institucionService: InstitucionService, private router: Router) { }

  seleccionarInstitucion(nombreInstitucion: string) {
    console.log('Seleccionando institución:', nombreInstitucion);
    this.institucionService.seleccionarInstitucion(nombreInstitucion);
    console.log('Institución guardada en el servicio:', this.institucionService.obtenerInstitucionSeleccionada());
    this.router.navigate(['/encuesta-docente']); 
  }
}
