import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  public shareName: string;

  constructor() { 
    this.shareName = 'NA';
  }
}
