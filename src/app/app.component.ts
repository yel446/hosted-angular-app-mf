import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  remote_url: string = 'http://localhost:4200/micro-fe.js';
  remote_react_url: string =
    'https://remote-app-wp-test.vercel.app/remoteEntry.js';
}
