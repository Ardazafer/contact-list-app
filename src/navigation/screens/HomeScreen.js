import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';

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
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contact List App Contact Permission',
        message:
          'Contact List App needs access to your contacts ' +
          'so you can use this app properly.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }).then((granted) => {
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
