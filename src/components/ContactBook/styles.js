import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export default StyleSheet.create({
  container: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: Colors.mainColor,
  },
  selectedNumberText: {color: Colors.disabledTextColor, fontSize: 20},
  selectedNumberContainer: {
    marginTop: 10,
  },
});
