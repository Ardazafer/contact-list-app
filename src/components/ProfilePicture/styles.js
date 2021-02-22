import {StyleSheet} from 'react-native';
import {ProfilePhotoBordeRadius, ProfilePhotoSize} from '../../constants/Sizes';

export default StyleSheet.create({
  imageStyle: {
    width: ProfilePhotoSize,
    height: ProfilePhotoSize,
    borderRadius: ProfilePhotoBordeRadius,
    marginRight: ProfilePhotoBordeRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeHolderText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
