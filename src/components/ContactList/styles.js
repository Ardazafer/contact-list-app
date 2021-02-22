import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export default StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.mainColor,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
