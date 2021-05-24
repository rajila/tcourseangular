import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../service/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-callserviceone',
  templateUrl: './callserviceone.component.html',
  styleUrls: ['./callserviceone.component.css'],
  providers: []
})
export class CallserviceoneComponent implements OnInit {

  constructor(private tservice: TestService) { // injecta el servicio al componente
  }

  ngOnInit(): void {
  }

  callServiceHome(): void {
    this.tservice.getHome().subscribe(
      response => {
        console.info(response);
      }, 
      error => {
        console.error(error);
      }
    );
  }
}
