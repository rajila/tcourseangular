import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngclass',
  templateUrl: './dirngclass.component.html',
  styleUrls: ['./dirngclass.component.css']
})
export class DirngclassComponent implements OnInit {

  public fondo: boolean;
  public letra: boolean;

  public lNotes: Array<Object>;

  constructor() { 
    this.fondo = false;
    this.letra = false;
    this.lNotes = new Array({name: 'Ronald9999', note: 10});
  }

  ngOnInit(): void {
  }

  updateClass(): Object {
    return {fondo: this.fondo, letra: this.letra};
  }
}