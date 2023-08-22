// src/components/NotesList/NotesList.tsx

import React from 'react';
import { FlatList } from 'react-native';

import { NoteItem, FolderItem } from './index'

interface ListItem {
  id: string;
  title: string;
  type: 'note' | 'folder';
}

interface NotesListProps {
  data: ListItem[];
  onNotePress: (id: string) => void;
  onFolderPress: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ data, onNotePress, onFolderPress }) => {
  const renderItem = ({ item }: { item: ListItem }) => {
    if (item.type === 'note') {
      return <NoteItem note={item} onPress={onNotePress} />;
    } else if (item.type === 'folder') {
      return <FolderItem folder={item} onPress={onFolderPress} />;
    }
    return null;
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
};

export default NotesList;
