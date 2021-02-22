import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export default StyleSheet.create({
  contactButton: {
    backgroundColor: Colors.mainColor,
  },
  selectedNumberText: {color: '#fff'},
  selectedNumberContainer: {
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.disabledTextColor,
  },
});
