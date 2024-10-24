import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private selectedCourse: string = '';

  constructor() {}

  setSelectedCourse(course: string) {
    this.selectedCourse = course;
    console.log('Curso seleccionado guardado en el servicio:', this.selectedCourse); // Para verificar
  }

  getSelectedCourse(): string {
    return this.selectedCourse;
  }
}