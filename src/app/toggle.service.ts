import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  items = [];
  data: string;
  today: Number = Date.now();

  currentStyles = {
    'color': 'white'
  };
  add(){
    this.items.push(Date.now());

  }
}
