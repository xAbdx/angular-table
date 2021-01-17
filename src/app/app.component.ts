import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  students = [
    {
      name: "Abd",
      age: 19,
      avg: 100
    },
    {
      name: "John",
      age: 20,
      avg: 70
    },
    {
      name: "Alex",
      age: 22,
      avg: 60
    },
    {
      name: "Moh",
      age: 18,
      avg: 90
    },
  ];

  getAlert() {
    alert("Hi");
  };

  text: string;
  //////////////////////////////////////////////////////////////////////////////
  toggleTag() {
    this.items.push("dsf")
    this.showMe = !this.showMe
  }
  showMe: boolean = true
  items = [];
  data: string;
  today: Number = Date.now();

  currentStyles = {
    'color': 'white'
  };


}