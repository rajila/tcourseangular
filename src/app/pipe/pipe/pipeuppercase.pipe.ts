import { Pipe, PipeTransform } from '@angular/core';

// Pipe PURO. Solo se ejecuta cuando hay cambios en las variables o cambios de referencias
// o cambios en los parametros de entrada del PIPE
// Solo en un array, si se agrega un elemento el PIPE no lo considera como cambio de variable
@Pipe({
  name: 'pipeuppercase'
})
export class PipeuppercasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    console.error('exe pipe puro');
    return value.toUpperCase();
  }
}