import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tmodelthree',
  templateUrl: './tmodelthree.component.html',
  styleUrls: ['./tmodelthree.component.css']
})
export class TmodelthreeComponent implements OnInit {

  public idBook: number;

  constructor(private route: ActivatedRoute) { 
    this.idBook = 0;
  }

  ngOnInit(): void {
    // Capturar los parametros de entrada del url
    this.route.parent!.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('id');
      this.idBook = (idParam)?parseInt(idParam):0;
    });
  }
}