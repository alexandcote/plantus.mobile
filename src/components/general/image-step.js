// @flow
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, StyleSheet, Button, Text } from 'react-native';
import dimens from '../../styles/dimens';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: dimens.defaultMargin,
    width: 200,
  },
  text: {
    marginBottom: dimens.defaultMargin,
    color: colors.colorAccent,
    fontWeight: 'bold',
  },
  instructions: {
    padding: dimens.defaultMargin,
    textAlign: 'center',
    fontSize: 20,
    color: colors.colorAccent,
  },
});

type PropTypes = {
  onSkip: () => any,
  onNext(image: Object): Object => any,
};

const imageToFile = (image: Object) => ({
  uri: image.uri,
  name: image.fileName,
  type: image.type,
});

const openPicker = (onNext: (image: Object) => any) => {
  ImagePicker.showImagePicker({
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 200,
  }, image => {
    if (!image.didCancel) {
      onNext(imageToFile(image));
    }
  });
};

const openCamera = (onNext: (image: Object) => any) => {
  ImagePicker.showImagePicker({
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 200,
  }, image => {
    if (!image.didCancel) {
      onNext(imageToFile(image));
    }
  });
};

const ImageStep = ({ onSkip, onNext }: PropTypes) => (
  <View style={styles.container}>
    <Text style={styles.instructions}>Set an Image</Text>
    <View style={styles.innerContainer}>
      <View style={styles.button}>
        <Button
            title="Pick an image"
            onPress={() => openPicker(onNext)} />
      </View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.button}>
        <Button
            title="Take a photo"
            onPress={() => openCamera(onNext)} />
      </View>
    </View>
    <Button title="Skip" onPress={onSkip} />
  </View>
);

export default ImageStep;
