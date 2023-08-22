import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, NewNoteButton, Dropdown } from '../components/NotesList';


const NotesListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNotePress = (noteId: string) => {
    console.log(`Note with ID ${noteId} pressed.`);
  };

  const handleNewNote = () => {
    console.log('New Note button pressed.');
  };

  const folders = [
    {
      folderName: "Folder 1",
      notes: [
        { id: '1', title: 'Note 1' },
        { id: '2', title: 'Note 2' },
      ]
    },
    {
      folderName: "Folder 2",
      notes: [
        { id: '3', title: 'Note 3' },
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <SearchBar onChange={(e) => setSearchQuery(e.nativeEvent.text)} />
      <NewNoteButton onPress={handleNewNote} />
      {folders.map(folder => (
        <Dropdown
          key={folder.folderName}
          folderName={folder.folderName}
          notes={folder.notes}
          onNotePress={handleNotePress}
        />
      ))}
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
