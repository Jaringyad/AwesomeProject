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
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
          tabBarIcon: () => null,
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
          component={ExerciseScreen}
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
