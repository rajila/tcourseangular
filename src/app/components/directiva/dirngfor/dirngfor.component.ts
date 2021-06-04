import { trigger, transition, style, animate} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngfor',
  templateUrl: './dirngfor.component.html',
  styleUrls: ['./dirngfor.component.css'],
  animations: [
    trigger('animation',[
      transition(':enter',[
        style({ backgroundColor: 'rgb(135, 233, 135)', height: 0}),
        animate(2000, style({ height: '*'} ))
      ]),
    ])
  ]
})
export class DirngforComponent implements OnInit {

  @Input() public lNotes: Array<any>;
  public classLi: string;

  constructor() { 
    this.lNotes = new Array();
    this.classLi = 'red';
  }

  ngOnInit(): void {
    this.initNotes();
  }

  ngOnChanges(): void {
    if (!this.lNotes) this.lNotes = new Array(); // Asignar value de inicio al parametro de entrada
  }

  initNotes() {
    this.lNotes.push({id: 1, name: 'Ronald', note: 10});
    this.lNotes.push({id: 2, name: 'Juanito', note: 8});
    this.lNotes.push({id: 3, name: 'Pepito', note: 6});
    this.lNotes.push({id: 4, name: 'Charlotte', note: 9});
    this.lNotes.push({id: 5, name: 'Isabella', note: 10});
  }

  // Para no cargar toda la información si no hay cambios relevantes
  trackByFn(index: number, note: any): number {
    return note.id;
  }

  clickNA(): void {
    this.lNotes = new Array();
    this.lNotes.push({id: 1, name: 'Ronald', note: 10});
    this.lNotes.push({id: 2, name: 'Juanito', note: 8});
    this.lNotes.push({id: 3, name: 'Pepito', note: 6});
    this.lNotes.push({id: 4, name: 'Charlotte', note: 9});
    this.lNotes.push({id: 5, name: 'Isabella', note: 10});
    this.lNotes.push({id: 6, name: 'Elina', note: 40});
    console.info('Event NA');
  }

}