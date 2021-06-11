import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-tpipe',
  templateUrl: './tpipe.component.html',
  styleUrls: ['./tpipe.component.css']
})
export class TpipeComponent implements OnInit {

  public dateCurrent: Date;
  public flagFormat: boolean; // true -> Full, false -> short
  public pi: number;

  public dividendo: number;
  public divisior: number;

  public title: string;


  constructor() { 
    this.dateCurrent = new Date();
    this.flagFormat = true;
    this.pi = 3.141592;
    this.dividendo = 179;
    this.divisior = 2;
    this.title = 'Hi from pipe';
  }

  ngOnInit(): void {
  }

  get formatDate(): string {
    return this.flagFormat? 'fullDate': 'shortDate';
  }

  changeFormatDate(): void {
    this.flagFormat = !this.flagFormat;
  }

  changeData(): void {
    console.info('event: click(' + this.title + ')');
    this.title += ' pipe';
  }

  resetTitle(): void {
    console.info('reset data');
    this.title = 'Hi from pipe';
  }
}