import React from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { images } from '../../assets/images';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image style={styles.buttonIcon} source={images.image} />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image style={styles.buttonIcon} source={images.camera} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
