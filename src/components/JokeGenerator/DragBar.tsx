import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { PanResponder } from 'react-native';

interface DragBarProps {
  panResponder: ReturnType<typeof PanResponder.create>;
}

const DragBar: React.FC<DragBarProps> = ({ panResponder }) => {
  return (
    <View style={styles.dragBarContainer} {...panResponder.panHandlers}>
      <TouchableOpacity style={styles.dragBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  dragBarContainer: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dragBar: {
    backgroundColor: '#8b8b8b',
    borderRadius: 4,
    height: 8,
    width: 40,
  },
});

export default DragBar;
