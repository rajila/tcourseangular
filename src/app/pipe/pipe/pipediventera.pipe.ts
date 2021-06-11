import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipediventera'
})
export class PipediventeraPipe implements PipeTransform {
  transform(value: number, divisor: number): string {
    return 'Cociente: ' + Math.floor(value/divisor) + ', Resto: ' + value%divisor }
}