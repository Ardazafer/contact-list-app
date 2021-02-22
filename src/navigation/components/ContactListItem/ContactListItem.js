import React from 'react';
import {View, Text} from 'react-native';

const ContactListItem = ({contact}) => {
  const {givenName, familyName} = contact;
  const fullName = `${givenName} ${familyName}`;

  return (
    <View>
      <Text>{fullName}</Text>
    </View>
  );
};

export default ContactListItem;
