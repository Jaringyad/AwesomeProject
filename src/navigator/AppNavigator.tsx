import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { EditorScreen, ExerciseScreen, HomeScreen, JokeGeneratorScreen, ProfileScreen, SearchScreen } from '../screens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
          },
          tabBarIconStyle: { display: "none" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          name="Editor"
          component={EditorScreen}
        />
        <Tab.Screen
          name="Exercise"
          component={JokeGeneratorScreen}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 'bold'
  },
  tabBarItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AppNavigator;
