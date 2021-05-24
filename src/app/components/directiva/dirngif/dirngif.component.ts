import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngif',
  templateUrl: './dirngif.component.html',
  styleUrls: ['./dirngif.component.css']
})
export class DirngifComponent implements OnInit {

  public showMsn: boolean;

  constructor() { 
    this.showMsn = false;
  }

  ngOnInit(): void {
  }
}