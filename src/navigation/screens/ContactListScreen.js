import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ContactListItem from '../../components/ContactListItem/ContactListItem';

const ContactListScreen = ({route}) => {
  const {contacts} = route.params;

  const renderContacts = ({item}) => <ContactListItem contact={item} />;

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
