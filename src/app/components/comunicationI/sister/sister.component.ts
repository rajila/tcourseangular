import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sister',
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css']
})
export class SisterComponent implements OnInit {
  @Input() public moneyInput: number;

  constructor() { 
    this.moneyInput = 0;
  }

  ngOnInit(): void {
  }

}
