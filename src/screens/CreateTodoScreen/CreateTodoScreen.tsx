import React from 'react';
import {TextInput} from 'react-native';
import { styles } from './styles';

type TodoScreenProps = {
  onChangeNote: (text: string) => void;
  note: string;
};

const CreateTododScreen = (props: TodoScreenProps) => {
  const {onChangeNote, note} = props;

  return (
    <TextInput
      maxLength={200}
      style={styles.inputText}
      multiline={true}
      placeholder="Note"
      onChangeText={text => onChangeNote(text)}
      value={note}
    />
  );
};

export default CreateTododScreen;
