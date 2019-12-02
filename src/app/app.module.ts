import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';
import {FormsModule} from '@angular/forms';
import { MainNoteComponent } from './main-note/main-note.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteCardComponent,
    NoteListComponent,
    NoteFormComponent,
    MainNoteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
