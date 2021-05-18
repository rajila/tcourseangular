import { Component, OnInit } from '@angular/core';

import { SharedataService } from '../../../service/sharedata.service';

@Component({
  selector: 'app-messageext',
  templateUrl: './messageext.component.html',
  styleUrls: ['./messageext.component.css']
})
export class MessageextComponent implements OnInit {

  constructor( public sdata: SharedataService) { }

  ngOnInit(): void {
  }

  updateName() {
    this.sdata.shareName = 'Hi from Message External Share';
  }

}