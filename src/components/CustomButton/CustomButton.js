import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Colors from '../../constants/Colors';
import styles from './styles';

const CustomButton = ({title, style, disabled, ...other}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.container} {...{disabled, ...other}}>
        <View
          style={[
            styles.button,
            style,
            disabled && {backgroundColor: Colors.disabledColor},
          ]}>
          <Text
            style={[
              styles.titleText,
              disabled && {color: Colors.disabledTextColor},
            ]}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default CustomButton;
