import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';
import { Show } from './show.model';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers: [ShowsService]
})
export class ShowsComponent implements OnInit {
  shows: Show[];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.shows = this.showsService.shows;
  }

}
