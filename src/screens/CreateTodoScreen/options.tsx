import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const createTodoOptions = (navigation: {goBack: () => void}) => {
  const headerRight = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.optionHandleText}>Save</Text>
      </TouchableOpacity>
    );
  };

  const headerLeft = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.optionHandleText}>Cancel</Text>
      </TouchableOpacity>
    );
  };

  return {
    headerStyle: styles.headerStyle,
    headerShown: true,
    headerLeft: headerLeft,
    headerTitle: 'Add note',
    headerRight: headerRight,
    headerTitleStyle: styles.title,
  };
};
