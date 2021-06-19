import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-eventosenparalelo',
  templateUrl: './eventosenparalelo.component.html',
  styleUrls: ['./eventosenparalelo.component.css']
})
export class EventosenparaleloComponent implements OnInit {

  public resultHttp: any;
  public contador: number;

  constructor(private postService: PostService) { 
    this.contador = 0;
  }

  ngOnInit(): void {
  }

  getDataParaleloUsingForkjoin(): void {
    this.postService.getDataParaleloUsingForkjoin().subscribe(data => this.resultHttp = data);
  }

  getDataParaleloUsingForkjoinII(): void {
    this.postService.getDataParaleloUsingForkjoinII().subscribe(data => this.resultHttp = data);
  }

  getDataParaleloUsingForkjoinIII(): void {
    this.contador = 0;
    let sInterval = setInterval(() => {this.contador++;}, 1000);
    this.postService.getDataParaleloUsingForkjoinIII().subscribe(data => {
      this.resultHttp = data;
      clearInterval(sInterval);
    });
  }

  getDataParaleloWithoutForkjoin(): void {
    this.contador = 0;
    let sInterval = setInterval(() => {this.contador++;}, 1000);
    this.postService.getDataParaleloWithoutForkjoin().subscribe(data => {
      this.resultHttp = data;
      clearInterval(sInterval);
    });
  }

  updateDataOnSecuencia(): void {
    this.postService.updateDataOnSecuencia().subscribe(data => this.resultHttp = data);
  }
}