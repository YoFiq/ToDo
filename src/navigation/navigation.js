import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../screens/to-do/to-do';
import { Info } from '../screens/info/info';

const AppTab = createBottomTabNavigator();

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
        activeTintColor: '#f34839',
        inactiveTintColor: '#909295',
        style: {
          backgroundColor: '#F0F0F6',
        },
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <AppTab.Screen name="ToDo" component={ToDo} />
      <AppTab.Screen name="Info" component={Info} />
    </AppTab.Navigator>
  );
};
