import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validations } from 'src/app/util/validations';

@Directive({
  selector: '[filtrarCaracteres]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: Validations.filtrarCaracteres }
  ]
})
export class FiltrarCaracteresDirective {}