export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export interface NoteInterface {
  id: string;
  note: string;
  isChecked: boolean;
}

interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  payload: NoteInterface;
}

interface AddNoteAction {
  type: typeof CREATE_NOTE;
  payload: NoteInterface;
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: NoteInterface;
}

export interface NoteState {
  notes: NoteInterface[];
}

export type NoteActionTypes =
  | AddNoteAction
  | UpdateNoteAction
  | DeleteNoteAction;