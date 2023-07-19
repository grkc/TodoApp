import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TododListScreen from '../screens/TodoListScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import {todoListOptions} from '../screens/TodoListScreen/options';
import {createTodoOptions} from '../screens/CreateTodoScreen/options';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TododListScreen"
          component={TododListScreen}
          options={({navigation}) => ({...todoListOptions(navigation)})}
        />
        <Stack.Screen
          name="CreateTodoScreen"
          component={CreateTodoScreen}
          options={({navigation}) => ({...createTodoOptions(navigation)})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
