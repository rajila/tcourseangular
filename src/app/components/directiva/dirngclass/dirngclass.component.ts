import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngclass',
  templateUrl: './dirngclass.component.html',
  styleUrls: ['./dirngclass.component.css']
})
export class DirngclassComponent implements OnInit {

  public fondo: boolean;
  public letra: boolean;

  constructor() { 
    this.fondo = false;
    this.letra = false;
  }

  ngOnInit(): void {
  }

  updateClass(): Object {
    return {fondo: this.fondo, letra: this.letra};
  }
}