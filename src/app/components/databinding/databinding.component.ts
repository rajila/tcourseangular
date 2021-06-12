import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public stateCantidad: boolean;

  public book: any;

  constructor() { 
    this.book = { titulo: 'Angular',
                  autor: 'Juan Antonio',
                  precio: 21.30,
                  stock: 5,
                  cantidad: 0,
                  imagen: 'assets/bookAngular.jpg'
                };
    this.stateCantidad = this.updateStateCantidad();
  }

  ngOnInit(): void {
  }

  downCantidad(): void {
    if (this.book.cantidad > 0) this.book.cantidad--;
    this.updateStateCantidad();
  }

  upCantidad(): void {
    if (this.book.cantidad < this.book.stock) this.book.cantidad++;
    this.updateStateCantidad();
  }

  getCoordenadas(event:any): void {
    console.error(event.clientX, event.clientY);
  }

  eventKeyup(event: any): void{
    if (this.book.cantidad > this.book.stock) this.book.cantidad = this.book.stock;
    else if (this.book.cantidad < 0) this.book.cantidad = 0;
    this.updateStateCantidad();
  }

  updateStateCantidad(): boolean {
    return this.stateCantidad = this.book.cantidad >= this.book.stock || this.book.cantidad < 0;
  }
}