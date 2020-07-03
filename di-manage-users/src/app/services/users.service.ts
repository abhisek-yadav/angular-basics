import { Injectable, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class UserService {
    activeUsers: string[] = ['John', 'Christian'];
    inactiveUsers: string[] = ['Anna', 'Jessica'];

    constructor(private logService: LogService) { }

    setActiveUserToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.logService.logMessage('Total Inactive users: ' + this.inactiveUsers.length);
    }

    setInactiveUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.logService.logMessage('Total Active users: ' + this.activeUsers.length);
    }
}
