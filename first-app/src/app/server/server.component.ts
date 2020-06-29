import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = 'offline';
    allowAddServer: boolean = false;
    addNewServer: string = 'server is not added';
    serverInput: string = "TestServer";
    isServerCreated: boolean = false;
    servers = ['server1, server2'];

    constructor() {
        setTimeout(() => {
            this.allowAddServer = true;
        }, 2000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    ngOnInit() {
    }

    onClickAddNewServer() {
        this.isServerCreated = true;
        this.servers.push(this.addNewServer);
        this.addNewServer = 'new server is added with status: ' + this.serverStatus;
    }

    onServerInput(event: Event) {
        this.serverInput = (<HTMLInputElement>event.target).value;
    }

    getColor() {
        return this.getServerStatus() === 'online' ? 'green' : 'red';
    }
}