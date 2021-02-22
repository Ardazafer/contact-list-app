import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import Colors from '../../constants/Colors';
const ContactListEmptyComponent = () => {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.innerEmptyContainer}>
        <Icon name="user" color={Colors.disabledTextColor} size={70} />
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>
            Sadly there's no contact found in your phone :(
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactListEmptyComponent;
