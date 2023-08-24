import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SearchBar, NewNoteButton, Dropdown } from '../components/NotesList';
import realm, { NoteSchema, FolderSchema } from '../models/Note/NoteModel'


const NotesListScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [folders, setFolders] = useState(realm.objects('Folder'));

    useEffect(
        () => {
            function updateFolders() {
                setFolders(realm.objects('Folder'))
            }
            const foldersData = realm.objects('Folder')
            foldersData.addListener(updateFolders)

            return () => {
                foldersData.removeListener(updateFolders);
            };
        }, []
    )


    const handleNotePress = (noteId: string) => {
        console.log(`Note with ID ${noteId} pressed.`);
    };

    const handleNewNote = () => {
        const existingFolders = realm.objects('Folder');
        if (existingFolders.length === 0) {
            realm.write(() => {
                realm.create('Folder', {
                    id: 1,
                    folderName: 'Default Folder',
                    notes: [],
                });
            });
        }
        realm.write(() => {
            const newNoteId = realm.objects('Note').length + 1;
            const newNote = {
                id: newNoteId,
                title: 'New Note',
                content: '',
                date: new Date(),
            };
            realm.create('Note', newNote);
            // Добавьте новую запись в нужную папку или создайте новую папку
            const folder = realm.objectForPrimaryKey('Folder', 1);
            folder.notes.push(newNote);
        });
        // Перенаправление на экран редактирования
    };

    return (
        <View style={styles.container}>
            <SearchBar onChange={(e) => setSearchQuery(e.nativeEvent.text)} />
            <NewNoteButton onPress={handleNewNote} />
            {Array.from(folders).length > 0 ? (
                Array.from(folders).map(folder => (
                    <Dropdown
                        key={folder.id}
                        folderName={folder.folderName}
                        notes={folder.notes}
                        onNotePress={handleNotePress}
                    />
                ))
            ) : (
                <Text>Make your first note</Text>
            )}

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
