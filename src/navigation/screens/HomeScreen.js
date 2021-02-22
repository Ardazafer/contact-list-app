import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';
import requestContactPermission from '../../utils/requestContactPermission';

const HomeScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(true);
  const selectedNumber = useSelector((state) => state.selectedNumber);
  const disableButtonCondition = !contacts.length && isPermissionGranted;
  const buttonTitle = disableButtonCondition
    ? 'Getting contact information'
    : 'Open Contact List';
  const {navigate} = navigation;

  const requestPermissionAndGetContacts = (shouldNavigateToContactList) => {
    if (Platform.OS === 'android') {
      requestContactPermission().then((granted) => {
        if (granted === 'granted') {
          loadContacts(shouldNavigateToContactList);
          setIsPermissionGranted(true);
        } else {
          setIsPermissionGranted(false);
        }
      });
    } else {
      loadContacts(shouldNavigateToContactList);
    }
  };

  const loadContacts = async (shouldNavigateToContactList) => {
    const _contacts = await Contacts.getAll();
    _contacts.sort((a, b) => (a.givenName < b.givenName ? -1 : 1));
    setContacts(_contacts);
    shouldNavigateToContactList &&
      navigate('ContactList', {contacts: _contacts});
  };

  useEffect(() => {
    requestPermissionAndGetContacts();
  }, []);

  const onContactButtonPressed = () => {
    !isPermissionGranted
      ? requestPermissionAndGetContacts(true)
      : navigate('ContactList', {contacts});
  };

  return (
    <View>
      <Button
        title={buttonTitle}
        disabled={disableButtonCondition}
        onPress={onContactButtonPressed}
      />
      {selectedNumber && <RenderSelectedNumber {...{selectedNumber}} />}
    </View>
  );
};

export default HomeScreen;

const RenderSelectedNumber = ({selectedNumber}) => {
  return <Text>{`Selected number is: ${selectedNumber}`}</Text>;
};
