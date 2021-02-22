import React from 'react';
import {View, FlatList, Text} from 'react-native';

const ContactListScreen = ({route}) => {
  const {contacts} = route.params;

  const renderContacts = ({item}) => <Text>{item.givenName}</Text>;

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={renderContacts}
        keyExtractor={(contact, _) => contact.recordID}
      />
    </View>
  );
};

export default ContactListScreen;
