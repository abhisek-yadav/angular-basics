import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  setToActive(id: number) {
    this.userService.setInactiveUserToActive(id);
  }

}
