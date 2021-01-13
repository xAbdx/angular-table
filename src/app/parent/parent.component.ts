import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() item: string;

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    if (newItem != "" && !this.items.includes(newItem)) {
      this.items.push(newItem);
    }
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
