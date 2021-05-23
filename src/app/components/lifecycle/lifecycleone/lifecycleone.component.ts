import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycleone',
  templateUrl: './lifecycleone.component.html',
  styleUrls: ['./lifecycleone.component.css']
})
export class LifecycleoneComponent implements OnInit {

  public data: string;

  constructor() { 
    this.data = '';
  }

  ngOnInit(): void {
  }

}
