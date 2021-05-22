import { Attribute, Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-two',
  templateUrl: './cmp-two.component.html',
  styleUrls: ['./cmp-two.component.css']
})
export class CmpTwoComponent implements OnInit {

  // @Attribute('customSurnameAttr') public surnameAttr: string; // Its necesary put in contructor for valur of component one
  @Input() public countryIn: string;
  @Input() public motherIn: string; // Error put on constructor

  public contadorClick: number;
  public contadorMouse: number;

  constructor(  @Attribute('customNameAttr') public nameAttr: string, 
                @Attribute('customSurnameAttr') public surnameAttr: string
  ) {
    this.countryIn = 'Spain'; // No change value. Take value of component One
    this.motherIn = 'Esperanza'; // No change value. Take value of component One
    this.contadorClick = 0;
    this.contadorMouse = 0;
  }

  ngOnInit(): void {
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

}