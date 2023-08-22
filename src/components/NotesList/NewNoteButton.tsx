// src/components/NotesList/NewNoteButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NewNoteButtonProps {
  onPress: () => void;
}

const NewNoteButton: React.FC<NewNoteButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>+ New Note</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});

export default NewNoteButton;
