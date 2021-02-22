import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const RenderSelectedNumber = ({selectedNumber}) => {
  return (
    <View style={styles.selectedNumberContainer}>
      <Text style={styles.selectedNumberText}>{selectedNumber}</Text>
    </View>
  );
};

export default RenderSelectedNumber;
