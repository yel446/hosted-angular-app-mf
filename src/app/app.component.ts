import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  remote_url: string = 'https://remote-angular-app-mf.vercel.app/micro-fe.js';
}
