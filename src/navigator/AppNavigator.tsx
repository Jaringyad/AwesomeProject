import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { NotesListScreen, NoteEditorScreen, ExerciseScreen, HomeScreen, JokeGeneratorScreen, ProfileScreen, SearchScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const EditorNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotesList" component={NotesListScreen} />
      <Stack.Screen name="NoteEditor" component={NoteEditorScreen} />
    </Stack.Navigator>
  )
}

const ExerciseNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
      <Stack.Screen name="JokeSetupGenerator" component={JokeGeneratorScreen} />
    </Stack.Navigator>
  );
};

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
          name="EditorNavigator"
          component={EditorNavigator}
          options={{ tabBarLabel: 'Notes' }}
        />
        <Tab.Screen name="ExerciseNavigator"
          component={ExerciseNavigator}
          options={{ tabBarLabel: 'Exercise' }} />
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
