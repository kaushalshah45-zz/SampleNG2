import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private date: Date = new Date();

  constructor()
  {
    setInterval(() => {
      this.date =  new Date();
    }, 1000);
  }
}
