import { Component, Directive } from '@angular/core';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: ['PopupDemoComponent']
})
export class AppComponent {
  title = 'app';
}
