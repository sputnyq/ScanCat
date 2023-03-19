import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
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
