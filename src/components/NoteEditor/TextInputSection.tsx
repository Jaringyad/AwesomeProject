import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

interface TextInputSectionProps {
  initialText?: string,
  handleTextChange?: (newText: string) => void,
  isBold: boolean,
  isItalic: boolean,
  isUnderline: boolean,
  isStrikeThrough: boolean,
}

const TextInputSection: React.FC<TextInputSectionProps> = ({ 
  initialText = '', 
  handleTextChange,
  isBold,
  isItalic,
  isUnderline,
  isStrikeThrough }) => {
  
  const [text, setText] = useState(initialText);

  const handleTextChangeInternal = (newText: string) => {
    setText(newText);
    if (handleTextChange) {
      handleTextChange(newText);
    }
  };

  const getFontStyle = () => {
    let fontStyle: FontStyleProps = { fontSize: 16 };
    if (isBold) {
      fontStyle = { ...fontStyle, fontWeight: 'bold' };
    }
    if (isItalic) {
      fontStyle = { ...fontStyle, fontStyle: 'italic' };
    }
    if (isUnderline) {
      // Вам нужно добавить стиль для подчеркивания текста (например, textDecorationLine: 'underline')
      fontStyle = { ...fontStyle };
    }
    if (isStrikeThrough) {
      // Вам нужно добавить стиль для зачеркивания текста (например, textDecorationLine: 'line-through')
      fontStyle = { ...fontStyle, textDecorationLine: 'line-through' };
    }
    return fontStyle;
  };


  return (
    <View>
      <View style={styles.textInputHeader}>
        <Text style={styles.textInputHeaderText}>After drag bar</Text>
        <Text style={styles.saveToNotes}>Save to notes</Text>
      </View>
      <ScrollView>
        <TextInput
          style={[styles.textInput]}
          placeholder="Input your text here"
          multiline
          defaultValue={initialText}
          onChangeText={handleTextChangeInternal}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputHeaderText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  saveToNotes: {
    fontSize: 16,
    color: 'red',
    marginRight: 8,
  },
  textInput: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textDecorationLine: {}
});

export default TextInputSection;
