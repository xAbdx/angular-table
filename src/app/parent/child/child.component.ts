import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
