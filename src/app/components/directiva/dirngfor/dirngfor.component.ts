import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngfor',
  templateUrl: './dirngfor.component.html',
  styleUrls: ['./dirngfor.component.css']
})
export class DirngforComponent implements OnInit {

  public lNotes!: Array<Object>;

  constructor() { 
    this.lNotes = new Array();
  }

  ngOnInit(): void {
    this.initNotes();
  }

  initNotes() {
    this.lNotes.push({name: 'Ronald', note: 10});
    this.lNotes.push({name: 'Juanito', note: 8});
    this.lNotes.push({name: 'Pepito', note: 6});
    this.lNotes.push({name: 'Charlotte', note: 9});
    this.lNotes.push({name: 'Isabella', note: 10});
  }

  // No preprocesar la información de esta manera ya que se invoca el metodo 2 veces el *ngFor
  getDataCustom(name: string): string {
    console.error(name);
    return 'Hi ' + name + '. What is up?';
  }

  // Forma para preprocesar la información: desde *ngFor se llama: trackBy: preProcessNote;
  preProcessNote(index: number, note: any): void {
    note.total = 100; // Add property
    console.error(note);
  }

}