import {combineReducers} from 'redux';
import {
  CREATE_NOTE,
  DELETE_NOTE,
  NoteActionTypes,
  NoteState,
  UPDATE_NOTE,
} from './types';

const initialState: NoteState = {
  notes: [
    {
      id: '0',
      note: 'First note',
      isChecked: false,
    },
    {
      id: '1',
      note: 'Second note',
      isChecked: true,
    },
  ],
};

export function noteReducer(
  state: NoteState = initialState,
  action: NoteActionTypes,
): NoteState {
  switch (action.type) {
    case CREATE_NOTE: {
      return {...state, notes: [...state.notes, action.payload]};
    }
    case UPDATE_NOTE: {
      const {payload} = action;
      const updatedNotes = state.notes.map(note =>
        note.id === payload.id ? {...note, ...payload} : note,
      );
      return {
        ...state,
        notes: updatedNotes,
      };
    }
    case DELETE_NOTE: {
      const {id} = action.payload;
      const newNotes = state.notes.filter(note => note.id !== id);
      return {...state, notes: newNotes};
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  note: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
