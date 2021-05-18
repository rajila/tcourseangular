import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public title: string;
  public moneyOut: number;
  public moneyOutSister: number;

  constructor() { 
    this.title = 'Hi from Father';
    this.moneyOut = 0;
    this.moneyOutSister = 0;
  }

  ngOnInit(): void {
  }

  sendMoney(value: string){
    console.error('data -> ' + value);
    this.moneyOut = +value; // + -> parse string to number
  }

  getEventSon(event:any) {
    console.info('get event on father');
    console.log(event);
    this.moneyOutSister = event.cantidad;
  }

}