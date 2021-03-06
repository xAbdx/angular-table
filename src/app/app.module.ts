import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ATableComponent } from './a-table/a-table.component';
import { ARowComponent } from './a-table/a-row/a-row.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './highlight.directive';
import { ScrollDirectiveDirective } from './scroll-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ATableComponent,
    ARowComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    ProfilePageComponent,
    HighlightDirective,
    ScrollDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
