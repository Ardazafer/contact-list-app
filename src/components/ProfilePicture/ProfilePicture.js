import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import randomColor from '../../utils/randomColor';

const {imageStyle, placeHolderText} = styles;

const renderImage = (image) => <Image source={image} style={imageStyle} />;

const renderPlaceHolder = (initials) => (
  <View style={[imageStyle, {backgroundColor: randomColor()}]}>
    <Text style={placeHolderText}>{initials}</Text>
  </View>
);

const ProfilePicture = ({image, initials}) =>
  image ? renderImage(image) : renderPlaceHolder(initials);

export default ProfilePicture;
