import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImageModal from '../../image-modal/ImageModal';

type Props = {
  file: AppFile;
};

export default function ImagePreview(props: Props) {
  const {file} = props;

  const [showModal, setShowModal] = useState(false);

  const handleTouch = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (file.name.endsWith('pdf')) {
    return (
      <View>
        <Text>{file.name}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handleTouch}>
      <ImageModal file={file} onRequestClose={closeModal} visible={showModal} />
      <Image source={{uri: file.path}} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 90,
    resizeMode: 'cover',
  },
});
