import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      user: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.userForm.get('user.username'));
    console.log(this.userForm);
  }
}
