import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from 'src/app/models/book';
import { Util } from '../../../util/util';

@Component({
  selector: 'app-tmodeltwo',
  templateUrl: './tmodeltwo.component.html',
  styleUrls: ['./tmodeltwo.component.css']
})
export class TmodeltwoComponent implements OnInit {

  public book!: Book;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Capturar los parametros de entrada del url
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('id');
      let id = (idParam)?parseInt(idParam):0;
      this.book = Util.Books.find(el => el.id === id)!;
    });
  }
}