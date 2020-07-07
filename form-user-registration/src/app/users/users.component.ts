import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('userForm', { static: false }) userForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm);
    alert(JSON.stringify(this.userForm.value));

  }

}
