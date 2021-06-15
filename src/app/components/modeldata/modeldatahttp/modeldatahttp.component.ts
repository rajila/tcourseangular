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
}