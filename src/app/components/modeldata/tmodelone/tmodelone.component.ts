import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-tmodelone',
  templateUrl: './tmodelone.component.html',
  styleUrls: ['./tmodelone.component.css'],
  providers: []
})
export class TmodeloneComponent implements OnInit {

  public lbooks: Array<Book>;
  public dimBooks: Number;

  constructor(private _bookService: BookService) { 
    this.lbooks = _bookService.getBooks();
    this.dimBooks = 0;
  }

  ngOnInit(): void {
    // this.initBook();
    // then -> retorna otra promesa y poder realizar un encadenamiento de promesas
    this._bookService.getBooksPromise().then(data => this.dimBooks = data.length);
  }

  initBook(): void {
    this.lbooks.push(new Book(1, 'El Quijote', 'Cuento'));
    this.lbooks.push(new Book(2, 'Hamiet', 'Venganza'));
  }

  // ngOnDestroy(): void {
  //   this.lbooks = [];
  // }
}