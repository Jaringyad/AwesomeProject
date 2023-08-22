// src/components/NotesList/NoteItem.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Note {
  id: string;
  title: string;
}

interface NoteItemProps {
  note: Note;
  onPress: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(note.id)} style={styles.item}>
      <Text style={styles.text}>{note.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default NoteItem;
