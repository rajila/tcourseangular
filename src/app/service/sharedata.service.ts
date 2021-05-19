import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  public $_nameEvent: EventEmitter<any>; // Variable de tipo Observable
  public shareName: string;

  constructor() { 
    this.shareName = 'NA'; // Case Example: Componente II
    this.$_nameEvent = new EventEmitter(); // Case Example: Componente III
  }
}
