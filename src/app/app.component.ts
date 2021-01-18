import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public toggleService: ToggleService) {

  }

  showMe: boolean = true
  toggleTag() {
    this.toggleService.add();
    this.showMe = !this.showMe
  }
  items = this.toggleService.items;
  data: string;

  currentStyles = {
    'color': 'white'
  };



}