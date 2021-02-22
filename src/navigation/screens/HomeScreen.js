import React from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector} from 'react-redux';
import useContactLoader from '../../utils/useContactLoader';

const HomeScreen = ({navigation}) => {
  const selectedNumber = useSelector((state) => state.selectedNumber);
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
