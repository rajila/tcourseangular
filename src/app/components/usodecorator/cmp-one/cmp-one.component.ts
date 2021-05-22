import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css']
})
export class CmpOneComponent implements OnInit {

  public country: string;
  public mother: string;

  constructor() { 
    this.country = 'Ecuador';
    this.mother = 'Aura';
  }

  ngOnInit(): void {
  }

}
