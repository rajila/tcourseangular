import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introform',
  templateUrl: './introform.component.html',
  styleUrls: ['./introform.component.css']
})
export class IntroformComponent implements OnInit {

  public code: string;
  public name: string;
  public edad: number;
  public opcion: string;
  public sexo: string;
  public comentario: string;
  public activar: boolean;

  constructor() { 
    this.code = '';
    this.name = '';
    this.edad = 0;
    this.opcion = '';
    this.sexo = '';
    this.comentario = '';
    this.activar = false;
  }

  ngOnInit(): void {
  }

  showCode(): void {
    console.log('Code: ', this.code);
  }

  onSubmit(): void {
    console.info('ppp');
  }

}