import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId=2;
    serverStatus='online'
    serverCreationStatus="No server was created";
    serverName=""
    serverCreated=false

    getServerStatus() {
        return this.serverStatus;
    }
    allowNewServer=false;
    constructor(){
        setTimeout(() => {
            this.allowNewServer=true;
        }, 2000);
    }

    onCreateServer(){
        this.serverCreated=true
        this.serverCreationStatus='Server was created '+this.serverName;
    }

    onUpdateServerName(event:any){
        this.serverName= (<HTMLInputElement>event.target).value;
    }
}