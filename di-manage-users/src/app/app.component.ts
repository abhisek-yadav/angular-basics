import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
