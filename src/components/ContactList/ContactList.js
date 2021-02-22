import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ContactListItem from '../../components/ContactListItem';
import {SELECT_CONTACT} from '../../redux/ContactReducer';
import ContactListHeader from './ContactListHeader';
import styles from './styles';

const ContactList = ({contacts}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectNumber = (number) =>
    dispatch({type: SELECT_CONTACT, payload: number});

  const handleSelectContact = (number) => {
    selectNumber(number);
    navigation.goBack();
  };

  const renderContacts = ({item, index}) => (
    <ContactListItem
      contact={item}
      onItemPress={handleSelectContact}
      {...{index}}
    />
  );
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={<ContactListHeader contactCount={contacts.length} />}
      data={contacts}
      renderItem={renderContacts}
      keyExtractor={(contact, _) => contact.recordID}
    />
  );
};

export default ContactList;
