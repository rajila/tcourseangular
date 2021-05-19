import { Component, OnInit } from '@angular/core';

import { SharedataService } from '../../../service/sharedata.service';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {

  constructor(private $_dataEvent: SharedataService) { }

  ngOnInit(): void {
  }

  sendMsn() {
    this.$_dataEvent.$_nameEvent.emit('Hi Ronald, what is up?');
  }

}
