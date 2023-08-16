import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenName = () => {
  return (
    <View style={styles.container}>
      <Text>Exercise screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenName;
