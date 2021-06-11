import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Con pipe automaticamente se elimina la subscripcition del observable
@Component({
  selector: 'app-pipeasync',
  templateUrl: './pipeasync.component.html',
  styleUrls: ['./pipeasync.component.css']
})
export class PipeasyncComponent implements OnInit {

  public promiseO: Promise<string>;
  public observableO: Observable<string>;

  constructor() { 
    this.promiseO = this.getPromise();
    this.observableO = this.getObservable();
  }

  ngOnInit(): void {
  }

  getPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {resolve('Promise finalizada');}, 2000);
    });
  }

  getObservable(): Observable<string> {
    return new Observable<string>(observer => {
      setTimeout(() => {observer.next('Observer finalizada');}, 4000);
    });
  }
}