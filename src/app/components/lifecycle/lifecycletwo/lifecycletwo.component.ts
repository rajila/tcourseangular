import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyfecycletwo',
  templateUrl: './lifecycletwo.component.html',
  styleUrls: ['./lifecycletwo.component.css']
})
export class LifecycletwoComponent implements OnInit {

  @Input() public dataIn: string;

  constructor() { 
    this.dataIn = '';
  }

  // Se ejecuta una sola vez e inicializa el componente. Sirve para cargar datos
  ngOnInit(): void {
     console.log('2.- lifecycle -> ngOnInit');
  }

  // Se ejecuta porque hay parametros de entrada en el componente: @Input, @Attribute
  ngOnChanges(): void {
    console.log('1.- lifecycle -> ngOnChanges');
  }

  // Usa para capturar cambios que Angula no captura
  ngDoCheck(): void {
    console.log('3.- lifecycle -> ngDoCheck');
  }

  // Despues de inicializar el contenido del componente
  ngAfterContentInit(): void {
    console.log('4.- lifecycle -> ngAfterContentInit');
  }

  // Comprueba el contenido visualizado del componente
  ngAfterContentChecked(): void {
    console.log('5.- lifecycle -> ngAfterContentChecked');
  }

  // Despues que las vistas del componente se inicializan
  ngAfterViewInit(): void {
    console.log('6.- lifecycle -> ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7.- lifecycle -> ngAfterViewChecked');
  }

}
