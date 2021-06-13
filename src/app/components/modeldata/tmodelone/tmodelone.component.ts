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

  constructor(private _bookService: BookService) { 
    this.lbooks = _bookService.getBooks();
  }

  ngOnInit(): void {
    // this.initBook();
  }

  initBook(): void {
    this.lbooks.push(new Book(1, 'El Quijote', 'Cuento'));
    this.lbooks.push(new Book(2, 'Hamiet', 'Venganza'));
  }

  // ngOnDestroy(): void {
  //   this.lbooks = [];
  // }
}