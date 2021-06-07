import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngstyle',
  templateUrl: './dirngstyle.component.html',
  styleUrls: ['./dirngstyle.component.css']
})
export class DirngstyleComponent implements OnInit {

  public color: string;
  public fontBig: boolean;
  public backgroundColor: boolean;
  public fontColor: boolean;
  public fontItalic: boolean;

  constructor() { 
    this.color = 'blue';
    this.fontBig = false;
    this.backgroundColor = false;
    this.fontColor = false;
    this.fontItalic = false;
  }

  ngOnInit(): void {
  }

  setStyles(): Object {
    return {  'font-size': this.fontBig? '300%':'initial',
              'background-color': this.backgroundColor? '#58FA58':'#FFFFFF',
              'color': this.fontColor? 'red':'black',
              'font-style': this.fontItalic? 'Italic':'normal'
            };
  } 
}