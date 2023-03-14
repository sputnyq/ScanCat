import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontSizes} from '../../../Styles';
import AppModal from '../commons/AppModal';

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
      <AppModal visible={showModal} onRequestClose={closeModal}>
        <View style={styles.rootFullSize}>
          <View style={styles.fullSizeWrapper}>
            <Image style={styles.fullSize} source={{uri: file.path}} />
          </View>
          <View style={styles.editBar} />
        </View>
      </AppModal>
      <View>
        <View>
          <Image source={{uri: file.path}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>{file.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rootFullSize: {
    flex: 1,
  },
  editBar: {
    height: 80,
  },
  fullSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'cover',
  },
  fullSizeWrapper: {
    flex: 1,
    padding: 5,
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.small,
  },
});
