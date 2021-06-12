import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tanimation',
  templateUrl: './tanimation.component.html',
  styleUrls: ['./tanimation.component.css'],
  animations: [
    trigger ('state', [
      state('inactivo', style({
        backgroundColor: '#FFFF00',
        transform: 'scale(1)',
        color: 'blue'
      })),
      state('activo', style({
        backgroundColor: '#013ADF',
        transform: 'scale(2)',
        color: 'white'
      })),
      transition('inactivo => activo', animate('1000ms ease-in')), // efeecto de transición de 1s
      transition('activo => inactivo', animate('1000ms ease-out'))
    ])
  ]
})
export class TanimationComponent implements OnInit {

  public state: string;

  constructor() { 
    this.state = 'inactivo';
  }

  ngOnInit(): void {
  }

  changeState(): void {
    console.info(new Date());
    this.state = this.state === 'activo'? 'inactivo' : 'activo';
  }
}