import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterTrackerComponent } from './home/character-tracker/character-tracker.component';
import { CheatsheetComponent } from './home/screen/cheatsheet/cheatsheet.component';
import { CharacterCardComponent } from './home/character-tracker/character-card/character-card.component';
import { ScreenComponent } from './home/screen/screen.component';
import { ResourcesListComponent } from './admin/resources-list/resources-list.component';
import { ResourceEditorComponent } from './admin/resource-editor/resource-editor.component';
import { MaterialModule } from './material';
import { AlertifyService } from './_services/alertify.service';
import { ResourcesService } from './_services/resources.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterTrackerComponent,
    CheatsheetComponent,
    CharacterCardComponent,
    ScreenComponent,
    ResourcesListComponent,
    ResourceEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    CKEditorModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService,
    ResourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
