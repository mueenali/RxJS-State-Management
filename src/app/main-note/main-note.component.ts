import { Component, OnInit } from '@angular/core';
import {eventDispatcher, store} from '../store';
import {ActionTypes} from '../store/actions';

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})

export class MainNoteComponent implements OnInit {
  notes = [];
  constructor() {
    store.subscribe((state) => {
    const {notes} = state;
    this.notes = notes;
  });
  }

  ngOnInit() {
    eventDispatcher.next({type: ActionTypes.GET_NOTES});
  }
}
