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
  text:string;
  // getAlert(name) {
  //   alert(name);
  // };
}