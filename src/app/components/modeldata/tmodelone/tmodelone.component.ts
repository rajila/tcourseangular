import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  public observableSubOneToOne!: Subscription;
  public lbooksOS: Array<Book>;

  public observableSubAll!: Subscription;
  public lbooksOSAll: Array<Book>;

  public observableSubInterval!: Subscription;
  public observableSubOf!: Subscription;
  public observableSubFromPromise!: Subscription;
  public observableSubFromArray!: Subscription;
  public observableSubMap!: Subscription;

  constructor(private _bookService: BookService) { 
    this.lbooks = _bookService.getBooks(); // Obtiene los libros normalmente
    this.dimBooks = 0;
    this.lbooksOS = [];
    this.lbooksOSAll = [];
  }

  ngOnInit(): void {
    // Using Promises
    // then -> retorna otra promesa y poder realizar un encadenamiento de promesas
    this._bookService.getBooksPromise().then(data => this.dimBooks = data.length);
    
    // Using Observables: Recibe los libros de uno en uno
    this.observableSubOneToOne = this._bookService.getBookObservableOneToOne().subscribe(
      book => this.lbooksOS.push(book), // Get data del observable
      error => console.error(error), // Catch ERROR
      () => console.info('Finalización Book One to One') // Catch FIN de envio de datos del observable
    );

    // Using Observables: Recibe todos los libros
    this.observableSubAll = this._bookService.getBookObservableAll().subscribe(
      books => this.lbooksOSAll = books,
      error => console.error(error),
      () => console.info('Finalización All Books')
    );

    // Observable of type interval();
    this.observableSubInterval = this._bookService.getObservableInterval().subscribe(
      data => console.log('Nro: ' + data)
    );

    this.observableSubOf = this._bookService.getObservableOf().subscribe(
      character => console.info('Character: ' + character)
    );

    this.observableSubFromPromise = this._bookService.getObservableFromPromise().subscribe(
      txt => console.log('txt: ', txt)
    );

    this.observableSubFromArray = this._bookService.getObservableFromArray().subscribe(
      dataO => console.log('dataO: ' + JSON.stringify(dataO))
    );

    this.observableSubMap = this._bookService.getObservableMap().subscribe(
      el => console.log('Map: ', el)
    );
  }

  ngOnDestroy(): void {
    if (this.observableSubOneToOne) this.observableSubOneToOne.unsubscribe();
    if (this.observableSubAll) this.observableSubAll.unsubscribe();
    if (this.observableSubInterval) this.observableSubInterval.unsubscribe();
    if (this.observableSubOf) this.observableSubOf.unsubscribe();
    if (this.observableSubFromPromise) this.observableSubFromPromise.unsubscribe();
    if (this.observableSubFromArray) this.observableSubFromArray.unsubscribe();
    if (this.observableSubMap) this.observableSubMap.unsubscribe();
  }
}