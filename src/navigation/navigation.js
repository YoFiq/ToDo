import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { TodoList } from '../screens/todo/todo-list';
import { About } from '../screens/about/about';

const AppTab = createBottomTabNavigator();
const TodoStack = createStackNavigator();
const AboutStack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#e6e6ea',
  },
  headerTintColor: '#2089DC',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
};

export const TodoStackScreen = () => (
  <TodoStack.Navigator>
    <TodoStack.Screen
      name="TodList"
      component={TodoList}
      options={{ ...headerOptions, title: 'Todo List' }}
    />
  </TodoStack.Navigator>
);

export const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="About"
      component={About}
      options={{ ...headerOptions, title: 'About' }}
    />
  </AboutStack.Navigator>
);

export const AppTabScreen = () => {
  const getRouteIcon = (name) => {
    switch (name) {
      case 'List':
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
      <AppTab.Screen name="List" component={TodoStackScreen} />
      <AppTab.Screen name="About" component={AboutStackScreen} />
    </AppTab.Navigator>
  );
};
