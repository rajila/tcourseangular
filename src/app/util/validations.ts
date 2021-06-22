import { AbstractControl } from '@angular/forms';

export class Validations {
    // Valida que solo se ingresen caracteres en MAYUSCULAS
    public static filtrarCaracteres(caracter: AbstractControl): any {
        if (caracter.value == null) return null;
        let contenido = caracter.value;
        for (let i = 0; i < contenido.length; i++) {
            let caracter = contenido.substr(i, 1);
            let valor = caracter.charCodeAt(0);
            if (!(valor >= 65 && valor <= 90)) return {filtrarCaracteres: true};
        }
        return null;
    }
}