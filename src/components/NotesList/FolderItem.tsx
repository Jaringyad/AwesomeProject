// src/components/NotesList/FolderItem.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Folder {
  id: string;
  title: string;
}

interface FolderItemProps {
  folder: Folder;
  onPress: (id: string) => void;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(folder.id)} style={styles.item}>
      <Text style={styles.text}>{folder.title}</Text>
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

export default FolderItem;
