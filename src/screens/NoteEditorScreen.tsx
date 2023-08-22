import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import Header from '../components/NoteEditor/Header'

const EditorScreen = () => {
  const editor = useRef(null);
  const [article, setArticle] = useState('');

  const editorInitializedCallback = () => {
    console.log('Editor is initialized');
  };

  const handleHeightChange = (height: any) => {
    console.log('Editor height change:', height);
  };

  return (
    
    <View style={styles.container}>
      <Header onPressBack={ () => {} } onPressNote={ () => {} }/>
      <View>
        <Text style={styles.textInputHeaderText}>After drag bar</Text>
      </View>
      <RichEditor
        ref={editor}
        style={styles.editor}
        placeholder="Начните писать здесь..."
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      />
      <RichToolbar
        style={styles.toolbar}
        editor={editor}
        actions={[
          'bold',
          'italic',
          'underline',
          'bullet',
          'number',
          'link',
          'image',
        ]}
        onPressAddImage={() => {
          // Добавьте ваш код для добавления изображения
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  textInputHeaderText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  editor: {
    flex: 1,
    padding: 10,
  },
  toolbar: {
    height: 50,
    backgroundColor: '#f5f5f5',
  },
  htmlContainer: {
    flex: 1,
    padding: 10,
  },
});

export default EditorScreen;
