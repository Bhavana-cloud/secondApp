import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './add-person/add-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
