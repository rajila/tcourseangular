import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

  // Send numeros 0, 1, 2, 3, ... N cada 20seg
  getObservableInterval(): Observable<number> {
    return interval(20000);
  }

  // Send secuencia de caracteres: R, o, .. d. Permite varios argumentos
  getObservableOf(): Observable<string> {
    return of('R', 'o', 'n', 'a', 'l', 'd');
  }

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

  getObservableMap(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(map(element => element * 2));
  }
}