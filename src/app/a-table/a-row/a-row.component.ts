import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-row',
  templateUrl: './a-row.component.html',
  styleUrls: ['./a-row.component.css']
})
export class ARowComponent implements OnInit {
  employees = [
    {
      Employee: {
        name: 'Ahmad',
        age: 33,
        email: 'ahmad@gmail.com',
        mobile: 2222333
      }
    },
    {
      Employee: {
        name: 'Abd',
        age: 23,
        email: 'abd@gmail.com',
        mobile: 2212333
      }
    },
    {
      Employee: {
        name: 'Alex',
        age: 25,
        email: 'alex@gmail.com',
        mobile: 234231
      }
    },
    {
      Employee: {
        name: 'Moh',
        age: 42,
        email: 'moh@gmail.com',
        company: 'myCompany'
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
