import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = 'No server was created!';
  serverName = '';
  serverStatus = false;
  userName = '';
  createUser = 'No User: ';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverStatus = true;
    this.createServerStatus = 'Server was created the Servername is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onCreateUserState() {
    if (this.userName.length !== 0) {
     return this.createUser = 'User: ' + this.userName;
    }
  }
  onResetUser(){
    this.userName = '';
  }

}
