import {useEffect, useState} from 'react';
import CreateTododScreen from './CreateTodoScreen';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Alert, Button, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createNote, updateNote} from '../../redux/actions';
import {NoteData} from '../TodoListScreen/TodoListContainer';
import {styles} from './styles';

const CreateTodoContainer = () => {
  const route = useRoute<RouteProp<{item?: NoteData}>>();
  const {item} = route.params || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bound = bindActionCreators({createNote, updateNote}, dispatch);

  const [isEditNote, setIsEditNote] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    if (item !== undefined) {
      setIsEditNote(true);
      setNote(item.note);
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onHandleSaveNote(note)}>
          <Text style={styles.optionHandleText}>Save</Text>
        </TouchableOpacity>
      )
    });
  }, [note]);

  const onChangeNote = (text: string) => {
    setNote(text);
  };

  const onHandleSaveNote = (note: string) => {
    if (note === '') {
      Alert.alert('Error', 'Fill the note with text');
    } else {
      if (isEditNote) {
        bound.updateNote({
          id: item.id,
          isChecked: item.isChecked,
          note: note,
        });
      } else {
        bound.createNote({
          id: String(+new Date()),
          isChecked: false,
          note: note,
        });
      }
      navigation.goBack();
    }
  };

  return <CreateTododScreen note={note} onChangeNote={onChangeNote} />;
};

export default CreateTodoContainer;
