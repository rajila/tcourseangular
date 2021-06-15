import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    });
  }

  // Get Books using Observables: Send all books. Case two: Envia todos los libros
  getBookObservableAll(): Observable<Array<Book>> {
    return new Observable<Array<Book>>( observer => {
      setTimeout(() => { observer.next(Util.Books) }, 2000);
    });
  }
}