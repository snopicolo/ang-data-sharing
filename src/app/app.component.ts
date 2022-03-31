import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-sharing';

  currentBeverage ="Coffee";

  //update parent component
  beveragesA = ['milk','tea', 'coffee', 'juice'];
  
  addBeverage(newBeverage: string) {
    this.beveragesA.push(newBeverage);
    this.clearInput();
  }

  //clear field method
  clearInput () {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
