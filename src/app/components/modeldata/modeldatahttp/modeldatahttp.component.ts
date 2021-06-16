import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../service/post.service';

@Component({
  selector: 'app-modeldatahttp',
  templateUrl: './modeldatahttp.component.html',
  styleUrls: ['./modeldatahttp.component.css']
})
export class ModeldatahttpComponent implements OnInit {

  public resultHttp: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  requestGetPostales(): void {
    this.postService.getPostales().subscribe(data => this.resultHttp = data);
  }

  requestPostPostales(): void {
    this.postService.addPostales().subscribe(data => this.resultHttp = data);
  }

  requestPutPostal(): void {
    this.postService.updatePostal().subscribe(data => this.resultHttp = data);
  }

  requestPatchPostal(): void {
    this.postService.updatePostalBody().subscribe(data => this.resultHttp = data);
  }

  requestDeletePostal(): void {
    this.postService.deletePostal().subscribe(data => this.resultHttp = data);
  }

  requestGetWithParams(): void {
    this.postService.getPostalesWithParams().subscribe(data => this.resultHttp = data);
  }

  requestGetWithTypePost(): void {
    this.postService.getPostalesTypePost().subscribe(data => this.resultHttp = data);
  }

  requestGetAllResponseHttp(): void {
    this.postService.getPostalesAllResponseHttp().subscribe(data => this.resultHttp = data);
  }

  requestGetERROR(): void {
    this.postService.getERROR().subscribe(
      data => this.resultHttp = data,
      (error: HttpErrorResponse) => {
        this.resultHttp = error;
        if (error.error instanceof Error) console.error('Error cliente: ', error.error.message);
        else console.error('Error servidor: ', error.status, error.message);
      });
  }
}