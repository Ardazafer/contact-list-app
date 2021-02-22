import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export default StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.mainColor,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
  },
  headerSubText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
