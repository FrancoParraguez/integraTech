import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.page.html',
  styleUrls: ['./evaluaciones.page.scss'],
})
export class EvaluacionesPage {
  selectedGroup: string = ''; // Declarar selectedGroup
  selectedCourse: string = ''; // Declarar selectedCourse
  constructor(private selectionService: SelectionService, private router: Router) {
    this.selectedCourse = this.selectionService.getSelectedCourse(); // Obtener el curso seleccionado del servicio
  }

  // Método para manejar el cambio de selección del grupo
  onGroupChange(event: any) {
    this.selectedGroup = event.detail.value; // Actualiza el valor de selectedGroup
  }

  // Método para comenzar la evaluación
  comenzarEvaluacion() {
    console.log('Grupo seleccionado para evaluar:', this.selectedGroup);
    this.router.navigate(['./encuestas-grupo']); 
  }
}
