import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontSizes} from '../../../../Styles';
import AppModal from '../../commons/AppModal';
import TouchableIcon from '../../commons/TouchableIcon';
import {Alert} from 'react-native';
import {deleteFile} from '../../features/FileUtils';
import {useDispatch} from 'react-redux';
import {reloadDir} from '../../../store/reducers/filesReducer';
import i18n from '../../../i18n';

type Props = {
  file: AppFile;
};

export default function ImagePreview(props: Props) {
  const {file} = props;
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleTouch = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const _deleteFile = () => {
    deleteFile(file.path).then(() => {
      dispatch(reloadDir());
      closeModal();
    });
  };

  const createConfirmDeletionAlert = () => {
    //TODO: translations
    Alert.alert(i18n('removePromptTitle'), i18n('removePrompt'), [
      {
        text: i18n('remove'),
        style: 'destructive',
        onPress: _deleteFile,
      },
      {
        text: i18n('cancel'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={handleTouch}>
      <AppModal visible={showModal} onRequestClose={closeModal}>
        <View style={styles.rootFullSize}>
          <View style={styles.fullSizeWrapper}>
            <Image style={styles.fullSize} source={{uri: file.path}} />
          </View>
          <View style={styles.editBar}>
            <TouchableIcon iconProps={{name: 'ios-share-outline'}} />

            <TouchableIcon
              touchProps={{onPress: createConfirmDeletionAlert}}
              iconProps={{name: 'ios-trash-outline', color: Colors.red}}
            />
          </View>
        </View>
      </AppModal>
      <View>
        <Image source={{uri: file.path}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rootFullSize: {
    flex: 1,
  },
  editBar: {
    paddingBottom: 20,
    flexDirection: 'row',
    height: 80,
    backgroundColor: Colors.white,
  },
  fullSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image: {
    width: 90,
    height: 90,
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
