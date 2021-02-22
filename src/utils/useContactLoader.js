import {useState, useEffect} from 'react';
import requestContactPermission from './requestContactPermission';
import Contacts from 'react-native-contacts';

const useContactLoader = (navigation) => {
  const [contacts, setContacts] = useState([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(true);
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

  return [contacts, isPermissionGranted, requestPermissionAndGetContacts];
};

export default useContactLoader;
