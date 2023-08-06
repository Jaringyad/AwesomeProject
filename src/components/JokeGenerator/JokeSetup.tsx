import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';

interface CenterContentProps {
  loading: boolean;
  setupText: string;
  onPress: () => void;
}

const CenterContent: React.FC<CenterContentProps> = ({ loading, setupText, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} underlayColor="#ffffff">
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={styles.centerText}>{setupText}</Text>
        )}
      </TouchableHighlight>
      {/* Additional components with images can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  centerText: {
    fontSize: 20,
    color: 'black',
  },
});

export default CenterContent;
