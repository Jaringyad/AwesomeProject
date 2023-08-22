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
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  text: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default NewNoteButton;
