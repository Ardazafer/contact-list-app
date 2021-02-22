import React from 'react';
import {View} from 'react-native';
import styles from './styles.js';

const Screen = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;
