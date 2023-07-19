import React from 'react';
import {Alert} from 'react-native';
import {bindActionCreators} from 'redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import TododListScreen from './TodoListScreen';
import {RootState} from '../../redux/reducers';
import {updateNote, deleteNote} from '../../redux/actions';

export type NoteData = {
  id: string;
  note: string;
  isChecked: boolean;
};

const TododListContainer = () => {
  const navigation = useNavigation<
    NavigationProp<{
      "CreateTodoScreen": {
        item?: NoteData;
      };
    }>
  >();
  const dispatch = useDispatch();
  const bound = bindActionCreators({updateNote, deleteNote}, dispatch);
  const selector = useSelector((state: RootState) => state.note);
  
  const DATA: NoteData[] = selector.notes;

  const toggleItem = (id: string) => {
    const findNote = DATA.find(note => note.id === id);
    if (findNote !== undefined) {
      bound.updateNote({
        id: id,
        isChecked: !findNote.isChecked,
        note: findNote.note,
      });
    } else {
      Alert.alert('Error', 'Note not found. Try again.');
    }
  };

  const onHandleDeleteNote = (item: NoteData) => {
    bound.deleteNote(item);
  };

  const onHandleEditNote = (item: NoteData) => {
    navigation.navigate('CreateTodoScreen', {
      item,
    });
  };

  return (
    <TododListScreen
      toggleItem={toggleItem}
      DATA={DATA}
      onHandleEditNote={onHandleEditNote}
      onHandleDeleteNote={onHandleDeleteNote}
    />
  );
};

export default TododListContainer;
