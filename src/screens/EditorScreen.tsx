import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';

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
      <View style={styles.htmlContainer}>
        <HTMLView value={article} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
