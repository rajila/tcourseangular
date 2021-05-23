import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css']
})
export class CmpOneComponent implements OnInit {

  public country: string;
  public mother: string;

  public valueOne: number;
  public valueTwo: number;
  public resultOperando: number;
  public lblResult: string;

  public dataJson: Object;

  constructor() { 
    this.country = 'Ecuador';
    this.mother = 'Aura';
    this.valueOne = 0;
    this.valueTwo = 0;
    this.resultOperando = 0;
    this.lblResult = 'X ? Y = ';
    this.dataJson = {name:'Ronald', surname:'Ajila'};
  }

  ngOnInit(): void {
  }

  catchEvent(data: any): void {
    this.resultOperando = data.result;
    this.lblResult = 'X ' + data.operando + ' Y = ';
  }
}
