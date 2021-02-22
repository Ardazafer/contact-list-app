import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import getInitials from '../../utils/getInitials';
import ProfilePicture from '../ProfilePicture';

export default class ContactListItem extends React.PureComponent {
  render() {
    const {contact, onItemPress, index} = this.props;
    const {
      givenName,
      middleName,
      familyName,
      phoneNumbers,
      hasThumbnail,
      thumbnailPath,
    } = contact;
    const {contactListItemContainer, numberText, firstItemStyle} = styles;

    const fullName = [givenName, middleName, familyName]
      .filter((name) => !!name)
      .join(' ');
    const image = hasThumbnail ? {uri: thumbnailPath} : undefined;
    const initials = getInitials(fullName);
    const selectedNumber = phoneNumbers.length ? phoneNumbers[0].number : null;
    const containerStyle =
      index === 0
        ? [contactListItemContainer, firstItemStyle]
        : contactListItemContainer;

    return (
      <TouchableHighlight
        style={containerStyle}
        onPress={() => onItemPress(selectedNumber, contact)}>
        <View style={contactListItemContainer}>
          <View style={styles.profilePictureContainer}>
            <ProfilePicture {...{image, initials}} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>{fullName}</Text>
            <RenderPhoneNumbers {...{phoneNumbers}} style={numberText} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const RenderPhoneNumbers = ({phoneNumbers, style}) =>
  phoneNumbers.map((number, index) => {
    const numberText = `${number.label}: ${number.number}`;
    const key = number + index;

    return <Text {...{key, style}}>{numberText}</Text>;
  });
