import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Util } from '../../../util/util';

@Component({
  selector: 'app-tmodelone',
  templateUrl: './tmodelone.component.html',
  styleUrls: ['./tmodelone.component.css']
})
export class TmodeloneComponent implements OnInit {

  public lbooks: Array<Book>;

  constructor() { 
    this.lbooks = Util.Books;
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