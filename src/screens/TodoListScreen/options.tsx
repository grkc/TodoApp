import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const todoListOptions = (navigation: {
  navigate: (route: string) => void;
}) => {
  const headerRight = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CreateTodoScreen')}>
        <Text style={styles.optionHandleText}>Add</Text>
      </TouchableOpacity>
    );
  };
  return {
    headerStyle: styles.headerStyle,
    headerShown: true,
    headerLeft: () => <></>,
    headerTitle: 'TODO',
    headerRight: headerRight,
    headerTitleStyle: styles.title,
  };
};
