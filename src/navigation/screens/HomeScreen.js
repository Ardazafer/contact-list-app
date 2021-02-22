import React from 'react';
import {View} from 'react-native';
import ContactBook from '../../components/ContactBook/ContactBook';
import styles from './styles.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ContactBook />
    </View>
  );
};

export default HomeScreen;
