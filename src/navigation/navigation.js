import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../screens/to-do/todo';
import { About } from '../screens/about/about';

const AppTab = createBottomTabNavigator();
const ToDoStack = createStackNavigator();
const AboutStack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#e6e6ea',
  },
  headerTintColor: '#2089DC',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const ToDoStackScreen = () => (
  <ToDoStack.Navigator>
    <ToDoStack.Screen
      name="ToDo"
      component={ToDo}
      options={{ ...headerOptions, title: 'To Do List' }}
    />
  </ToDoStack.Navigator>
);

export const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="Info"
      component={About}
      options={{ ...headerOptions, title: 'About' }}
    />
  </AboutStack.Navigator>
);

export const AppTabScreen = () => {
  const getRouteIcon = (name) => {
    switch (name) {
      case 'ToDo':
        return faList;
      default:
        return faInfoCircle;
    }
  };

  return (
    <AppTab.Navigator
      initialRouteName="VehicleList"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const iconName = getRouteIcon(route.name);
          return <FontAwesomeIcon icon={iconName} size={22} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2089DC',
        inactiveTintColor: '#909295',
        style: {
          backgroundColor: '#e6e6ea',
        },
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <AppTab.Screen name="ToDo" component={ToDoStackScreen} />
      <AppTab.Screen name="About" component={AboutStackScreen} />
    </AppTab.Navigator>
  );
};
