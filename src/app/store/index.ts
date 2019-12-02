import {Subject} from 'rxjs';
import {ActionTypes} from './actions';
import {Note} from '../models/note.modle';


interface InitialState {
  notes: Array<Object>;
}

let state: InitialState = {
  notes: [],
};

interface Event {
  type: string;
  payload?: Object;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_NOTES:
      store.next(state);
      break;

    case ActionTypes.CREATE_NOTE:
      state = {
        notes: [...state.notes, data.payload],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_NOTE:
      const {notes} = state;
      const note = data.payload;
      const updatedNotes = notes.filter((n: Note) => n.id !== note);
      state = {
        notes: updatedNotes
      };
      store.next(state);
      break;
    default:
      break;
  }
});
