import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstitucionService {
  institucionSeleccionada: string = '';

  constructor() {}

  seleccionarInstitucion(nombreInstitucion: string) {
    this.institucionSeleccionada = nombreInstitucion;
    console.log('Institución guardada en el servicio:', this.institucionSeleccionada); // Asegúrate de que esto se ejecute y muestre el valor
  }

  obtenerInstitucionSeleccionada(): string {
    return this.institucionSeleccionada;
  }
}
