import {Component, Input, OnInit} from '@angular/core';
import {eventDispatcher} from '../store';
import {ActionTypes} from '../store/actions';
import {Note} from '../models/note.modle';

declare const feather;

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;
  constructor() { }

  ngOnInit() {
    feather.replace();
  }

  async deleteNote(id) {
    const shouldDelete = confirm('Are you sure you want to delete this note?');
    if (shouldDelete) {
      eventDispatcher.next({type: ActionTypes.DELETE_NOTE, payload: id});
    }
  }
}
