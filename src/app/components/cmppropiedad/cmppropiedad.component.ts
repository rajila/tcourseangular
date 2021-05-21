import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmppropiedad',
  templateUrl: './cmppropiedad.component.html',
  styleUrls: ['./cmppropiedad.component.css']
})
export class CmppropiedadComponent implements OnInit {

  public title: string;
  public aplicarFondo: boolean;
  public mostrarSection: boolean;
  public habilitar: boolean;
  public linkGoogle: string;

  constructor() { 
    this.title = 'Propiedades Componente';
    this.aplicarFondo = true;
    this.mostrarSection = true;
    this.habilitar = false;
    this.linkGoogle = 'https://www.google.com';
  }

  ngOnInit(): void {
  }

  halaMadrid() {
    alert('Real Madrid CAMPEON!!');
  }

}
