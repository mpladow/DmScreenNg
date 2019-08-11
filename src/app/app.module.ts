import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterTrackerComponent } from './home/character-tracker/character-tracker.component';
import { CheatsheetComponent } from './home/cheatsheet/cheatsheet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterTrackerComponent,
    CheatsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
