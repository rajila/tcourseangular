import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SharedataService } from '../../../service/sharedata.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit, OnDestroy {

  public msn: string;
  private catchSuscription: Subscription; // catch event emit

  constructor(public $_dataEvent: SharedataService) { 
    this.msn = 'Wait msn...';
    this.catchSuscription = new Subscription();
  }

  ngOnInit(): void {
    this.catchSuscription = this.$_dataEvent.$_nameEvent.subscribe(data => {
      console.log(data);
      this.msn = data;
    });
  }

  ngOnDestroy(): void {
    this.catchSuscription.unsubscribe(); // Unsubscribe for free memory
  }
}