import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
  .color p{
    color:'white-color';
    }
    `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = 'No server was created!';
  serverName = '';
  serverStatus = false;
  userName = '';
  createUser = 'No User: ';
  servers = ['Testserver', 'TestServer2'];

  secretPassword = 'JS-NINJA';
  passwordIsFalse = false;
  clickList = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverStatus = true;
    this.servers.push(this.serverName);
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
  onResetUser() {
    this.userName = '';
  }
  onSetPassword() {
    this.passwordIsFalse = !this.passwordIsFalse;
    this.clickList.push(this.clickList.length + 1);
  }
  onColorChange() {
   return this.clickList.length < 5 ? 'white' : 'blue';
  }

}
