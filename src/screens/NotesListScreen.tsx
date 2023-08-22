import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, NewNoteButton, NotesList } from '../components/NotesList';

const NotesListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNotePress = (noteId: string) => {
    console.log(`Note with ID ${noteId} pressed.`);
  };

  const handleFolderPress = (folderId: string) => {
    console.log(`Folder with ID ${folderId} pressed.`);
  };

  const handleNewNote = () => {
    console.log('New Note button pressed.');
  };

  const data = [
    { id: '1', title: 'Note 1', type: 'note' },
    { id: '2', title: 'Folder 1', type: 'folder' },
    { id: '3', title: 'Note 2', type: 'note' },
    { id: '4', title: 'Folder 2', type: 'folder' },
  ];

  const filteredData = searchQuery
    ? data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : data;

  return (
    <View style={styles.container}>
      <SearchBar onChange={(e) => setSearchQuery(e.nativeEvent.text)} />
      <NewNoteButton onPress={handleNewNote} />
      <NotesList data={filteredData} onNotePress={handleNotePress} onFolderPress={handleFolderPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default NotesListScreen;
