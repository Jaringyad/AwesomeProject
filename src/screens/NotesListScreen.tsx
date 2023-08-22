import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotesListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotesList Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotesListScreen;
