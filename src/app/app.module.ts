import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterTrackerComponent } from './home/character-tracker/character-tracker.component';
import { CheatsheetComponent } from './home/screen/cheatsheet/cheatsheet.component';
import { CharacterCardComponent } from './home/character-tracker/character-card/character-card.component';
import { ScreenComponent } from './home/screen/screen.component';
import { ResourcesListComponent } from './admin/resources-list/resources-list.component';
import { ResourceEditorComponent } from './admin/resources-list/resource-editor/resource-editor.component';
import { MaterialModule } from './material';
import { AlertifyService } from './_services/alertify.service';
import { ResourcesService } from './_services/resources.service';
import { CharacterQuickaddComponent } from './home/character-tracker/character-quickadd/character-quickadd.component';
import { EncounterInitiativeDialogComponent } from './home/character-tracker/encounter-initiative-dialog/encounter-initiative-dialog.component';
import { CreatureEditorComponent } from './admin/creature-list/creature-editor/creature-editor.component';
import { CreatureListComponent } from './admin/creature-list/creature-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterBoxComponent } from './login/register-box/register-box.component';
import { ScreenLoaderComponent } from './home/screen/cheatsheet-loader/screen-loader.component';
import { DeleteConfirmComponent } from './admin/dialog/delete-confirm/delete-confirm.component';
import { AuthGuard } from './_guards/auth.guard';
import { DeleteCardConfirmComponent } from './home/character-tracker/character-card/delete-card-confirm/delete-card-confirm.component';
import { SessionService } from './_services/session.service';
import { HelperService } from './_services/helper.service';
import { NotesService } from './_services/notes.service';

import { TimeCounterComponent } from './home/time-counter/time-counter.component';
import { NotesComponent } from './home/notes/notes.component';
import { LoginBoxComponent } from './login/login-box/login-box.component';
import { ManualComponent } from './home/screen/manual/manual.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterTrackerComponent,
    CheatsheetComponent,
    CharacterCardComponent,
    ScreenComponent,
    ResourcesListComponent,
    ResourceEditorComponent,
    CharacterQuickaddComponent,
    EncounterInitiativeDialogComponent,
    CreatureEditorComponent,
    CreatureListComponent,
    LoginComponent,
    RegisterBoxComponent,
    ScreenLoaderComponent,
    DeleteConfirmComponent,
    DeleteCardConfirmComponent,
    TimeCounterComponent,
    LoginBoxComponent,
    ManualComponent
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
    ReactiveFormsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NgxPageScrollCoreModule
    ],
  entryComponents: [
    CharacterQuickaddComponent,
    EncounterInitiativeDialogComponent,
    DeleteConfirmComponent,
    DeleteCardConfirmComponent
  ],
  providers: [
    AlertifyService,
    ResourcesService,
    CreatureCardService,
    AuthGuard,
    SessionService,
    HelperService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
