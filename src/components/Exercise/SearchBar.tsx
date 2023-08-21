import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface SearchBarProps extends TextInputProps {
  value: string;
  onTextChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onTextChange, ...props }) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search tasks"
      value={value}
      onChangeText={onTextChange}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
    searchInput: {
      fontSize: 16,
      padding: 8,
      borderBottomColor: '#CCCCCC',
      borderBottomWidth: 1, // Толщина границы, как в компонентах Header
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      marginBottom: 16,
    },
  });
  

export default SearchBar;
