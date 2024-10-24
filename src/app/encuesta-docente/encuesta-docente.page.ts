import { Component } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { Router } from '@angular/router';
import { InstitucionService } from '../services/institucion.service';

@Component({
  selector: 'app-encuesta-docente',
  templateUrl: './encuesta-docente.page.html',
  styleUrls: ['./encuesta-docente.page.scss'],
})
export class EncuestaDocentePage {
  selectedCourse: string = ''; // Inicializa la variable
  institucionSeleccionada: string = '';

  constructor(
    private institucionService: InstitucionService,
    private selectionService: SelectionService,
    private router: Router
  ) { }
  
  ngOnInit() {
    // Obtiene la institución seleccionada del servicio
    this.institucionSeleccionada = this.institucionService.obtenerInstitucionSeleccionada();
    console.log('Institución seleccionada en EncuestaDocentePage:', this.institucionSeleccionada);
  }
  
  // Método para manejar el cambio de selección
  onCourseChange(event: any) {
    this.selectedCourse = event.detail.value; // Actualiza la variable con el valor seleccionado
    this.selectionService.setSelectedCourse(this.selectedCourse); // Establece el curso en el servicio
  }
  selectedGroup: string = '';

  onGroupChange(event: any) {
    this.selectedGroup = event.detail.value; // Actualiza la variable con el grupo seleccionado
  }
  // Método para evaluar
  evaluate() {
    console.log('Curso seleccionado para evaluar:', this.selectedCourse);
    this.router.navigate(['/evaluaciones']); // Navega a la página de evaluaciones
  }
}