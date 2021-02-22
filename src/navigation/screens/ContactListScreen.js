import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import {SELECT_CONTACT} from '../../redux/ContactReducer';

const ContactListScreen = ({navigation, route}) => {
  const {contacts} = route.params;
  const dispatch = useDispatch();

  const selectNumber = (number) =>
    dispatch({type: SELECT_CONTACT, payload: number});

  const handleSelectContact = (number) => {
    selectNumber(number);
    navigation.goBack();
  };

  const renderContacts = ({item}) => (
    <ContactListItem contact={item} onItemPress={handleSelectContact} />
  );

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
