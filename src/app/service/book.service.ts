import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Util } from '../util/util';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Array<Book> {
    return Util.Books;
  }

  // Get Books using Promise
  getBooksPromise(): Promise<Array<Book>> {
    return new Promise<Array<Book>>((resolve, reject) => {
      setTimeout(() => {resolve(Util.Books);}, 10000);
    });
  }
}