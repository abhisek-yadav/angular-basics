import { Injectable, OnInit } from '@angular/core';
import { UserService } from './users.service';

export class LogService {

  logMessage(message: string) {
    console.log(message);
  }

}
