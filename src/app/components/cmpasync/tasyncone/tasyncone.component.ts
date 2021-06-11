import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-tasyncone',
  templateUrl: './tasyncone.component.html',
  styleUrls: ['./tasyncone.component.css']
})
export class TasynconeComponent implements OnInit {

  public promiseData: string = '';
  public observableData: string = '';
  public subcriptionO: Subscription; // Se guarda la referencia para poder eliminar la subscripción

  constructor() {
    this.getPromise().then(data => this.promiseData = data);
    this.subcriptionO = this.getObservable().subscribe(data => this.observableData = data);
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
      setTimeout(() => {observer.next('Observer finalizada');}, 5000);
    });
  }

  ngOnDestroy(): void {
    if (this.subcriptionO) this.subcriptionO.unsubscribe();
  }
}