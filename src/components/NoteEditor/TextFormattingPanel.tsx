import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TextFormattingPanelProps {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeThrough: boolean;
  onBoldPress: () => void;
  onItalicPress: () => void;
  onUnderlinePress: () => void;
  onStrikeThroughPress: () => void;
}

const TextFormattingPanel: React.FC<TextFormattingPanelProps> = ({
  isBold,
  isItalic,
  isUnderline,
  isStrikeThrough,
  onBoldPress,
  onItalicPress,
  onUnderlinePress,
  onStrikeThroughPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isBold ? styles.activeButton : {}]}
        onPress={onBoldPress}
      >
        <Text style={[styles.buttonText, isBold ? styles.activeButtonText : {}]}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isItalic ? styles.activeButton : {}]}
        onPress={onItalicPress}
      >
        <Text style={[styles.buttonText, isItalic ? styles.activeButtonText : {}]}>I</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isUnderline ? styles.activeButton : {}]}
        onPress={onUnderlinePress}
      >
        <Text style={[styles.buttonText, isUnderline ? styles.activeButtonText : {}]}>U</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isStrikeThrough ? styles.activeButton : {}]}
        onPress={onStrikeThroughPress}
      >
        <Text style={[styles.buttonText, isStrikeThrough ? styles.activeButtonText : {}]}>S</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  activeButtonText: {
    color: 'white',
  },
});

export default TextFormattingPanel;
