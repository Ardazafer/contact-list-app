import React from 'react';
import {useSelector} from 'react-redux';
import useContactLoader from '../../utils/useContactLoader';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../components/CustomButton/CustomButton';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import styles from './styles';
import RenderSelectedNumber from './RenderSelectedNumber';

const ContactBook = () => {
  const selectedNumber = useSelector((state) => state.selectedNumber);
  const navigation = useNavigation();
  const [
    contacts,
    isPermissionGranted,
    isPendingRequest,
    requestPermissionAndGetContacts,
  ] = useContactLoader(navigation);

  const buttonTitle = isPendingRequest
    ? 'Getting contact information'
    : 'Open Contact List';

  const onContactButtonPressed = () => {
    !isPermissionGranted
      ? requestPermissionAndGetContacts(true)
      : navigation.navigate('ContactList', {contacts});
  };

  return (
    <View style={styles.container}>
      <Icon
        name="contacts"
        size={80}
        color={Colors.mainColor}
        style={{margin: 10}}
      />
      <CustomButton
        style={styles.contactButton}
        title={buttonTitle}
        disabled={isPendingRequest}
        onPress={onContactButtonPressed}
      />
      {selectedNumber && <RenderSelectedNumber {...{selectedNumber}} />}
    </View>
  );
};

export default ContactBook;
