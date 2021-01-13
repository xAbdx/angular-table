import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ATableComponent } from './a-table/a-table.component';
import { ARowComponent } from './a-table/a-row/a-row.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ATableComponent,
    ARowComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
