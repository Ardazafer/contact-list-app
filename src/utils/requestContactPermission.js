import {PermissionsAndroid} from 'react-native';

const requestContactPermission = () =>
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contact List App Contact Permission',
    message:
      'Contact List App needs access to your contacts ' +
      'so you can use this app properly.',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });

export default requestContactPermission;
