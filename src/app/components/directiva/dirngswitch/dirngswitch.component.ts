import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngswitch',
  templateUrl: './dirngswitch.component.html',
  styleUrls: ['./dirngswitch.component.css']
})
export class DirngswitchComponent implements OnInit {

  public option: string;

  constructor() { 
    this.option = 'NA';
  }

  ngOnInit(): void {
  }
}