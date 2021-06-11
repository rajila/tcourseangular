import { Pipe, PipeTransform } from '@angular/core';

// No es aconsejable usar un pipe IMPURO, ya que cualquier cambio o evento en el componente
// se ejecuta el pipe impuro
@Pipe({
  name: 'pipeimpuppercase',
  pure: false // Indica si el pipe en IMPURO
})
export class PipeimpuppercasePipe implements PipeTransform {

  transform(value: string): string {
    console.error('exe pipe impuro');
    return value.toUpperCase();
  }
}