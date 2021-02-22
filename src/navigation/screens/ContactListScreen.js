import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import Screen from './Screen';

const ContactListScreen = ({route}) => {
  const {contacts} = route.params;

  return (
    <Screen>
      <ContactList {...{contacts}} />
    </Screen>
  );
};

export default ContactListScreen;
