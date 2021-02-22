import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import getInitials from '../../utils/getInitials';
import ProfilePicture from '../ProfilePicture';

export default class ContactListItem extends React.PureComponent {
  render() {
    const {contact, onItemPress} = this.props;
    const {
      givenName,
      familyName,
      phoneNumbers,
      hasThumbnail,
      thumbnailPath,
    } = contact;
    const {container, numberText} = styles;

    const fullName = `${givenName} ${familyName}`;
    const image = hasThumbnail ? {uri: thumbnailPath} : undefined;
    const initials = getInitials(fullName);
    const selectedNumber = phoneNumbers.length ? phoneNumbers[0].number : null;

    return (
      <TouchableOpacity onPress={() => onItemPress(selectedNumber)}>
        <View style={container}>
          <ProfilePicture {...{image, initials}} />
          <View>
            <Text>{fullName}</Text>
            <RenderPhoneNumbers {...{phoneNumbers}} style={numberText} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const RenderPhoneNumbers = ({phoneNumbers, style}) =>
  phoneNumbers.map((number, index) => {
    const numberText = `${number.label}: ${number.number}`;
    const key = number + index;

    return <Text {...{key, style}}>{numberText}</Text>;
  });
