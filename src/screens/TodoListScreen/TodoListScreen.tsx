import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import {NoteData} from './TodoListContainer';
import {COLORS} from '../../res/colors';

enum TextDecoration {
  lineThrough = 'line-through',
  none = 'none',
}

type NoteProps = {
  item: NoteData;
  onPress: () => void;
  textColor: string;
  textDecoration: TextDecoration;
};

type TodoScreenProps = {
  toggleItem: (id: string) => void;
  DATA: NoteData[];
  onHandleEditNote: (item: NoteData) => void;
  onHandleDeleteNote: (item: NoteData) => void;
};

const TododListScreen = (props: TodoScreenProps) => {
  const {toggleItem, DATA, onHandleEditNote, onHandleDeleteNote} = props;

  const Item = ({item, onPress, textColor, textDecoration}: NoteProps) => (
    <View style={styles.item}>
      <CheckBox
        value={item.isChecked}
        onValueChange={onPress}
        style={styles.checkBox}
        boxType="square"
        tintColor={COLORS.Emerald}
        onTintColor={COLORS.Emerald}
        onCheckColor={COLORS.Emerald}
      />
      <TouchableOpacity
        style={styles.blockWithNote}
        onPress={() => onHandleEditNote(item)}>
        <Text
          style={[
            styles.note,
            {color: textColor, textDecorationLine: textDecoration},
          ]}>
          {item.note}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandleDeleteNote(item)}>
        <Text style={styles.deleteIcon}>&#215;</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}: {item: NoteData}) => {
    const color = item.isChecked ? COLORS.Grey : COLORS.Black;
    const textDecoration = item.isChecked
      ? TextDecoration.lineThrough
      : TextDecoration.none;

    return (
      <Item
        item={item}
        onPress={() => toggleItem(item.id)}
        textColor={color}
        textDecoration={textDecoration}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default TododListScreen;
