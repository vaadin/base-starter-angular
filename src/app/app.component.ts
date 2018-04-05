import { Component } from '@angular/core';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  clicked() {
    this.title = document.getElementById('text')['value'];
  }
}
