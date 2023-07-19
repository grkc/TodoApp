import {
  UPDATE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  NoteInterface,
  NoteActionTypes,
} from './types';
import {Dispatch} from 'redux';

export const createNote = (note: NoteInterface) => {
  return (dispatch: Dispatch<NoteActionTypes>) => {
    dispatch({
      type: CREATE_NOTE,
      payload: note,
    });
  };
};

export const updateNote = (note: NoteInterface) => {
  return (dispatch: Dispatch<NoteActionTypes>) => {
    dispatch({
      type: UPDATE_NOTE,
      payload: note,
    });
  };
};

export const deleteNote = (note: NoteInterface) => {
  return (dispatch: Dispatch<NoteActionTypes>) => {
    dispatch({
      type: DELETE_NOTE,
      payload: note,
    });
  };
};
