import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-impure-pipe',
  templateUrl: './impure-pipe.component.html',
  styleUrls: ['./impure-pipe.component.css']
})
export class ImpurePipeComponent implements OnInit {

  url: string;

  constructor() { }

  ngOnInit() {

  }

}
