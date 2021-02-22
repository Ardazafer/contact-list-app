import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default class ContactListItem extends React.PureComponent {
  render() {
    const {contact} = this.props;
    const {givenName, familyName, phoneNumbers} = contact;
    const fullName = `${givenName} ${familyName}`;
    const {container, numberText} = styles;

    return (
      <View style={container}>
        <View>
          <Text>{fullName}</Text>
          <RenderPhoneNumbers {...{phoneNumbers}} style={numberText} />
        </View>
      </View>
    );
  }
}

const RenderPhoneNumbers = ({phoneNumbers, style}) =>
  phoneNumbers.map((number, index) => {
    const numberText = `${number.label}: ${number.number}`;
    const key = number + index;

    return <Text {...{key, style}}>{numberText}</Text>;
  });
