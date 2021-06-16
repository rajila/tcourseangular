import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { map, merge, mapTo, take, concat, tap } from 'rxjs/operators';
import { Book } from '../models/book';
import { Util } from '../util/util';

@Injectable()
export class BookService {

  constructor() { }

  // Get Books normal
  getBooks(): Array<Book> {
    return Util.Books;
  }

  // Get Books using Promise: Send all books.
  getBooksPromise(): Promise<Array<Book>> {
    return new Promise<Array<Book>>((resolve, reject) => {
      setTimeout(() => {resolve(Util.Books);}, 5000);
    });
  }

  // Example de encadenamiento de promesas
  getDataPromiseEnCadena(data: number = 0): Promise<Array<number>> {
    return new Promise<boolean>((resolve, reject) => {
      let isPar = (data % 2 === 0) ? true : false;
      setTimeout(() => { resolve(isPar) }, 5000);
    })
    .then((data:boolean) => (data) ? 'par' : 'impar')
    .then((data:string) => {
      let ldata: Array<number> = Array();
      if (data === 'par') ldata = [2,4,6,8,10];
      else ldata = [1,3,5,7,9];
      return ldata;
    });
  }

  // Get Books using Observables: Book one to one. Case one: Envia libro, uno a uno
  getBookObservableOneToOne(): Observable<Book> {
    return new Observable<Book>( observer => {
      // Retorna el libro uno a uno
      Util.Books.forEach((book, index) => {
        setTimeout(() => {
          observer.next(book); // El observable retorna el libro cada (index + 1) * 1500 segundos
        }, (index + 1) * 2000);
      });
      setTimeout(() => {
        observer.complete(); // Indica que el Observable ha dejado de enviar datos
      }, (Util.Books.length + 1) * 2000);
    }).pipe(map((data:any) => { // La lista se procesa en cada iteración
      console.error('OneToOne', data);
      return data;
    }));
  }

  // Get Books using Observables: Send all books. Case two: Envia todos los libros
  getBookObservableAll(): Observable<Array<Book>> {
    return new Observable<Array<Book>>( observer => {
      setTimeout(() => { observer.next(Util.Books) }, 2000);
    }).pipe(map((data:any) => { // En un solo objeto tiene una lista de datos
      console.log('All', data);
      return data;
    }));
  }

  // El operador interval crea un observable que emite números secuenciales (0,1,...)
  // cada cierto intervalo de tiempo según lo que le hayamos indicado por parámetro.
  // Send numeros 0, 1, 2, 3, ... N cada 20seg
  getObservableInterval(): Observable<number> {
    return interval(20000);
  }

  // El operador crea un observable que emite los valores que se le of hayan pasado por
  // parámetro y naliza emitiendo la noticación de nalización.
  // Send secuencia de caracteres: R, o, .. d. Permite varios argumentos
  getObservableOf(): Observable<string> {
    return of('R', 'o', 'n', 'a', 'l', 'd');
  }

  // El operador from permite crear un observable a partir de distintos objetos y tipos
  // de datos. Las posibilidades son muy amplias
  // Send string, using Promise
  getObservableFromPromise(): Observable<string> {
    return from(new Promise<string>((resolve, reject)=>{
      setTimeout(() => resolve('Hi from Observable - Promise'), 3000);
    }));
  }

  // Send uno a uno los valores: Solo permite un argumento
  getObservableFromArray(): Observable<Object> {
    return from([{id: 1, name: 'Ronald', note: 9}, {id: 2, name: 'Daniel', note: 10}]);
  }

  // El operador map transforma los valores emitidos por un observable aplicando una
  // función, y devuelve un observable que emite los valores transformados.
  getObservableMap(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(map(element => element * 2));
  }

  // El operador merge nos permite combinar varios observables en uno solo fusionando
  // sus emisiones:
  getObservableMerge(): Observable<string> {
    // take(5) -> only take the 5 numbers
    // mapTo() -> transforma los valores
    let observableOne = interval(2000).pipe(take(5), mapTo('One'));
    let observableTwo = interval(2000).pipe(take(5), mapTo('Two'));
    return observableOne.pipe(merge(observableTwo));
  }

  //  El operador CONCAT es similar a merge, pero en este caso el observable resultado de
  //  la fusión emite los valores de los distintos observables de forma ordenada: primero
  //  los del primer observable, luego del segundo, etc.
  getObservableConcat(): Observable<string> {
    // take(5) -> only take the 5 numbers
    // mapTo() -> transforma los valores
    let observableOne = interval(2000).pipe(take(5), mapTo('One'));
    let observableTwo = interval(2000).pipe(take(5), mapTo('Two'));
    return observableOne.pipe(concat(observableTwo));
  }

  //  El operador DO/TAP nos permite realizar una acción para cada uno de los valores emitidos
  //  por un observable, pero sin posibilidad de modicarlos. El operador devuelve
  //  un observable idéntico al de entrada.
  getObservableDoOrTap(): Observable<string> {
    return interval(2000).pipe(take(5), mapTo('One'), tap(data => console.log('Nada: ', data)));
  }
}