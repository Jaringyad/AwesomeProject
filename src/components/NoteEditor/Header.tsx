import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  onPressBack: () => void;
  onPressNote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPressBack, onPressNote }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.backLink} onPress={onPressBack}>
        Back to list
      </Text>
      <Text style={styles.noteLink} onPress={onPressNote}>
        Note settings
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  backLink: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 8,
    color: 'black',
  },
  noteLink: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 8,
    color: 'black',
  },
});

export default Header;
