import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputHeader}>
        <Text style={styles.textInputHeaderText}>After drag bar</Text>
        <Text style={styles.saveToNotes}>Save to notes</Text>
      </View>
      <TextInput style={styles.textInput} placeholder="Input your punchline here" multiline />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginTop: 16,
  },
  textInputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
});

export default TextInputSection;
