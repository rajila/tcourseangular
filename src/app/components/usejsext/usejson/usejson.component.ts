import { Component, OnInit } from '@angular/core';

declare var Util :any;

// Dos formas de llamar Jquery
declare var jQuery: any;
declare var $:any;


@Component({
  selector: 'app-usejson',
  templateUrl: './usejson.component.html',
  styleUrls: ['./usejson.component.css']
})
export class UsejsonComponent implements OnInit {

  public elName: any;

  constructor() { }

  ngOnInit(): void {
  }

  onMensajeClick(msn: string): void {
    Util.alert(msn);
    this.elName = jQuery('#name');
    $('#name');
    console.log(this.elName.val());
  }
}