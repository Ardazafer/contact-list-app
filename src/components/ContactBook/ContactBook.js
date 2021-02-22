import React from 'react';
import {useSelector} from 'react-redux';
import useContactLoader from '../../utils/useContactLoader';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../components/CustomButton/CustomButton';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import styles from './styles';

const ContactBook = () => {
  const selectedNumber = useSelector((state) => state.selectedNumber);
  const navigation = useNavigation();
  const [
    contacts,
    isPermissionGranted,
    requestPermissionAndGetContacts,
  ] = useContactLoader(navigation);

  const disableButtonCondition = !contacts.length && isPermissionGranted;

  const buttonTitle = disableButtonCondition
    ? 'Getting contact information'
    : 'Open Contact List';

  const onContactButtonPressed = () => {
    !isPermissionGranted
      ? requestPermissionAndGetContacts(true)
      : navigation.navigate('ContactList', {contacts});
  };

  return (
    <>
      <Icon name="contacts" size={80} color={Colors.mainColor} />
      <CustomButton
        style={styles.contactButton}
        title={buttonTitle}
        disabled={disableButtonCondition}
        onPress={onContactButtonPressed}
      />
      {selectedNumber && <RenderSelectedNumber {...{selectedNumber}} />}
    </>
  );
};

export default ContactBook;

const RenderSelectedNumber = ({selectedNumber}) => {
  return <Text>{`Selected number is: ${selectedNumber}`}</Text>;
};
