import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    setTheme('bs4');
  }
  title = 'promotion-angular';
  selector: 'demo-dropdown-basic'
}
