import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const todoListOptions = (navigation: {
  navigate: (route: string) => void;
}) => {
  const headerRight = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CreateTodoScreen')}>
        <Text>+</Text>
      </TouchableOpacity>
    );
  };
  return {
    headerLeft: () => <></>,
    headerTitle: 'TODO',
    headerRight: headerRight,
  };
};
