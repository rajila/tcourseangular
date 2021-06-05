import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngmodel',
  templateUrl: './dirngmodel.component.html',
  styleUrls: ['./dirngmodel.component.css']
})
export class DirngmodelComponent implements OnInit {

  public name: string;
  public nametmp: string;

  constructor() { 
    this.name = this.nametmp = '';
  }

  ngOnInit(): void {
  }

  changeText(): void {
    this.nametmp = this.name.toUpperCase();
  }
}