import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import { Colors } from '../../config/Colors';
import { images } from '../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function ImageAvatar({ uri, onPress, source }) {
  return (
    <ImageBackground>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          resizeMode="cover"
          source={
            source ? source : { uri: uri?.uri ? uri.uri : uri ? uri : null }
          }
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Icon name="camera" size={30} color={Colors.tertiary} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
  },
  avatarImage: {
    height: 120,
    width: 120,
    overflow: 'hidden',
    borderColor: `${Colors.tertiary}`,
    borderWidth: 2,
    borderRadius: 100,
  },
  addButton: {
    height: 40,
    width: 40,

    borderRadius: 100,
    position: 'absolute',
    left: 100,
    top: 95,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
