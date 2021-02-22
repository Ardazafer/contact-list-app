import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const selectedNumber = useSelector((state) => state.selectedNumber);
  const {navigate} = navigation;

  const requestPermissionAndGetContacts = () => {
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
          loadContacts();
          setIsPermissionGranted(true);
        } else {
          setIsPermissionGranted(false);
        }
      });
    } else {
      loadContacts();
    }
  };

  const loadContacts = async () => {
    const _contacts = await Contacts.getAll();
    setContacts(_contacts);
  };

  useEffect(() => {
    requestPermissionAndGetContacts();
  }, []);

  const onContactButtonPressed = () => {
    !isPermissionGranted
      ? requestPermissionAndGetContacts()
      : navigate('ContactList', {contacts});
  };

  return (
    <View>
      <Button title="Open Contact List" onPress={onContactButtonPressed} />
      <Text>{`Selected number: ${selectedNumber}`}</Text>
    </View>
  );
};

export default HomeScreen;
