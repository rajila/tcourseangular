import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Util } from '../util/util';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Array<Book> {
    return Util.Books;
  }
}