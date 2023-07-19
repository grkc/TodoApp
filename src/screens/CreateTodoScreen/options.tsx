import React from 'react';
import {Button} from 'react-native';

export const createTodoOptions = (navigation: {goBack: () => void}) => {
  const headerRight = () => {
    return <Button title="Save" onPress={() => navigation.goBack()} />;
  };

  const headerLeft = () => {
    return <Button title="Cancel" onPress={() => navigation.goBack()} />;
  };

  return {
    headerLeft: headerLeft,
    headerTitle: 'Add note',
    headerRight: headerRight,
  };
};
