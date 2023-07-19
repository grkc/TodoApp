import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TododListScreen from '../screens/TodoListScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="TododListScreen"
            component={TododListScreen}
            options={{title: 'Todo'}}
        />
        <Stack.Screen
            name="CreateTodoScreen"
            component={CreateTodoScreen}
            options={{title: 'Create'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
