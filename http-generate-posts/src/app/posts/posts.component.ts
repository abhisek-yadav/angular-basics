import { Posts } from './posts.model';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((resp: any[]) => {
      console.log(resp);
      this.posts = resp;
    });
  }

}
