import { Component, OnInit } from '@angular/core';
import { type } from 'jquery';

@Component({
  selector: 'app-anydirng',
  templateUrl: './anydirng.component.html',
  styleUrls: ['./anydirng.component.css']
})
export class AnydirngComponent implements OnInit {

  public mostrar: boolean;
  public lnumbers: Array<number>;
  public pares: boolean;
  public impares: boolean;
  public colorPar: string;
  public colorImpar: string;

  constructor() { 
    this.mostrar = false;
    this.lnumbers = [1, 2, 3, 4, 5, 6];
    this.pares = true;
    this.impares = true;
    this.colorPar = 'blue';
    this.colorImpar = 'red';
  }

  ngOnInit(): void {
  }

  setClass(val: boolean, typedata: string): Object {
    if ( typedata === 'p') return {activoP: val, inactivo: !val};
    else return {activoI: val, inactivo: !val};
  }

}