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
  contactListItemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  firstItemStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  profilePictureContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  nameText: {
    fontSize: 15,
  },
  numberText: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.5)',
  },
  emptyContainer: {
    backgroundColor: '#fff',
  },
  innerEmptyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: Colors.disabledColor,
    borderRadius: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.disabledTextColor,
  },
  emptyTextContainer: {flex: 1},
});
