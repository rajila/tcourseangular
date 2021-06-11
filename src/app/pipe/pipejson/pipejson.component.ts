import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Writer } from 'src/app/models/writer';

@Component({
  selector: 'app-pipejson',
  templateUrl: './pipejson.component.html',
  styleUrls: ['./pipejson.component.css']
})
export class PipejsonComponent implements OnInit {

  public bookMath: Book;
  public bookChe: Book;
  public writerRonal: Writer;

  constructor() { 
    this.bookMath = new Book('Matematicas basicas', 'cientifica');
    this.bookChe = new Book('Farmacias I', 'Medicina');
    this.writerRonal = new Writer(1, 'Ronald', new Date(), [this.bookMath, this.bookChe]);
  }

  ngOnInit(): void {
  }
}