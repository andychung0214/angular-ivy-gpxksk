import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  demoText = 'Demo Text';
  href = 'https://www.google.com.tw';
  twoWayText = 'test';
  changeText() {
    this.demoText = 'Changed Demo Title';
  }
}
