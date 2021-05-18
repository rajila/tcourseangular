import { Component, OnInit } from '@angular/core';

import { SharedataService } from '../../../service/sharedata.service';

@Component({
  selector: 'app-messageint',
  templateUrl: './messageint.component.html',
  styleUrls: ['./messageint.component.css']
})
export class MessageintComponent implements OnInit {

  constructor(public sdata: SharedataService) { }

  ngOnInit(): void {
  }

}
