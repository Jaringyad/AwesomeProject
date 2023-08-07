import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/NoteEditor/Header';

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const NoteEditor = () => {
    const initialText = `Здарова)`

    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
        console.log('Text changed', text);
    };

    return (
        <View style={styles.container}>
            {/* Заголовок */}
            <Header onPressBack={() => { /* Handle back press */ }} onPressNote={() => { /* Handle note press */ }} />

            <Editor/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerButton: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tocContainer: {
        marginBottom: 16,
        // Здесь можно добавить стили для оглавления
    },
    editorContainer: {
        flex: 1,
        marginBottom: 16,
        // Здесь можно добавить стили для контейнера редактора
    },
    editor: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        // Здесь можно добавить стили для текста в редакторе
    },
    formattingPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // Здесь можно добавить стили для панели форматирования
    },
});

export default NoteEditor;
