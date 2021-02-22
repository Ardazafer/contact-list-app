import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
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
});
