import { Attribute, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-two',
  templateUrl: './cmp-two.component.html',
  styleUrls: ['./cmp-two.component.css']
})
export class CmpTwoComponent implements OnInit, OnChanges {

  // @Attribute('customSurnameAttr') public surnameAttr: string; // Its necesary put in contructor for value of component one
  @Input() public countryIn: string;
  @Input() public motherIn: string; // Error put on constructor

  @Input() public valueOneIn: number;
  @Input() public valueTwoIn: number;

  @Input() public dataJson: Object;

  @Output() public sendData: EventEmitter<any>; 

  public contadorClick: number;
  public contadorMouse: number;

  constructor(  @Attribute('customNameAttr') public nameAttr: string, 
                @Attribute('customSurnameAttr') public surnameAttr: string
  ) {
    this.countryIn = 'Spain'; // No change value. Take value of component One
    this.motherIn = 'Esperanza'; // No change value. Take value of component One
    this.valueOneIn = 0;
    this.valueTwoIn = 0;
    this.contadorClick = 0;
    this.contadorMouse = 0;
    this.sendData = new EventEmitter();
    this.dataJson = {}; // if dataJson no recibe params init
  }

  ngOnInit(): void {
    console.error(typeof this.dataJson);
    console.log(this.dataJson);
  }

  ngOnChanges(): void {
  }

  @HostListener('click', ['$event'])
  onHostClick(): void {
    console.log('Click');
    this.contadorClick++;
  }

  @HostListener('mouseover', ['$event'])
  onHostMouse(): void {
    console.log('Mouse');
    this.contadorMouse++;
  }

  onClickData($event: any): void {
    let operator = $event.target.getAttribute('operator');
    if (operator === '+') {
      this.sendData.emit({result: this.valueOneIn+this.valueTwoIn, operando: operator});
    } else if (operator === '-') {
      this.sendData.emit({result: this.valueOneIn-this.valueTwoIn, operando: operator});
    } else if (operator === '*') {
      this.sendData.emit({result: this.valueOneIn*this.valueTwoIn, operando: operator});
    } else {
      this.sendData.emit({result: this.valueOneIn/this.valueTwoIn, operando: operator});
    }
  }
}