// Un componentes controla la zona de espacio de la pantalla que representa la vista
// Define las propiedades y metodos que se usan en el template
import { Component } from '@angular/core';

@Component({ // Anotaciones para el componente
  selector: 'app-root', // etiqueta raiz
  templateUrl: './app.component.html', // Vista
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Controlador
  title = 'tcourseangular';
}
