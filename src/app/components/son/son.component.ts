import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit, OnChanges {
  @Input() public moneyInput: number;
  @Output() public shareMoneyEvent: EventEmitter<any> = new EventEmitter();

  public moneyForSisterPorc: number;
  
  constructor() { 
    this.moneyInput = 0;
    this.moneyForSisterPorc = 15;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.error('Init');
    console.info(this.moneyInput);
    console.error('End');
  }

  shareMoney() {
    this.shareMoneyEvent.emit({cantidad: this.moneyInput * (this.moneyForSisterPorc/100)});
    this.moneyInput = this.moneyInput - (this.moneyInput * (this.moneyForSisterPorc/100));
  }

}
