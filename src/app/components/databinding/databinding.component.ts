import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public book: any;

  constructor() { 
    this.book = { titulo: 'Angular',
                  autor: 'Juan Antonio',
                  precio: 21.30,
                  stock: 5,
                  cantidad: 0,
                  imagen: 'assets/bookAngular.jpg'
                };
  }

  ngOnInit(): void {
  }
}