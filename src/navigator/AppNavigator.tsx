import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditorScreen from '../screens/EditorScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.label,
          tabBarIcon: () => null,
          tabBarStyle: styles.tabBarStyle
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
  label: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  tabBarStyle: {
  }
});

export default AppNavigator;
