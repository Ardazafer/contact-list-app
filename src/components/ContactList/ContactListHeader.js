import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ContactListHeader = ({contactCount}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{`${contactCount} contacts`}</Text>
    </View>
  );
};

export default ContactListHeader;
