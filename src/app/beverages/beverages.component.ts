import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  //parent to child
  @Input() beverages = "tea";

  //child to parent
  @Output() newBeverageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
