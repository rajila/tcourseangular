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
      // transition(':leave',[
      //   animate(1000, style({ backgroundColor: 'red', height: 0} ))
      // ])
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
    console.log('11')
    if (!this.lNotes) this.lNotes = new Array(); // Asignar value de inicio al parametro de entrada
  }

  initNotes() {
    this.lNotes.push({id: 1, name: 'Ronald', note: 10});
    this.lNotes.push({id: 2, name: 'Juanito', note: 8});
    this.lNotes.push({id: 3, name: 'Pepito', note: 6});
    this.lNotes.push({id: 4, name: 'Charlotte', note: 9});
    this.lNotes.push({id: 5, name: 'Isabella', note: 10});
  }

  // No preprocesar la información de esta manera ya que se invoca el metodo 2 veces el *ngFor
  getDataCustom(name: string): string {
    console.error(name);
    return 'Hi ' + name + '. What is up?';
  }

  // Para no cargar toda la información si no hay cambios relevantes
  trackByFn(index: number, note: any): number {
    console.error(note);
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