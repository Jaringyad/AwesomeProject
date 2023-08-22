import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface Note {
  id: string;
  title: string;
}

interface DropdownProps {
  folderName: string;
  notes: Note[];
  onNotePress: (noteId: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ folderName, notes, onNotePress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.labelContainer}>
        <Text style={styles.label}>{folderName}</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onNotePress(item.id)} style={styles.noteContainer}>
              <Text style={styles.note}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {

  },
  labelContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    margin: 15,
  },
  noteContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  note: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 30,
    marginBottom: 8
  },
});

export default Dropdown;
