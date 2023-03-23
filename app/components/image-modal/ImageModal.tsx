import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../../Styles';
import AppModal from '../commons/AppModal';
import FileDelete from '../file-delete/FileDelete';
import FileShare from '../file-share/FileShare';

type Props = {
  file: AppFile;
  visible: boolean;
  onRequestClose: () => void;
};

export default function ImageModal({onRequestClose, visible, file}: Props) {
  return (
    <AppModal
      visible={visible}
      onRequestClose={onRequestClose}
      title={file.name}>
      <View style={styles.rootFullSize}>
        <View style={styles.fullSizeWrapper}>
          <Image style={styles.fullSize} source={{uri: file.path}} />
        </View>
        <View style={styles.editBar}>
          <FileShare file={file} />

          <FileDelete
            paths={[file.path]}
            cb={onRequestClose}
            color={Colors.main}
          />
        </View>
      </View>
    </AppModal>
  );
}

const styles = StyleSheet.create({
  rootFullSize: {
    flex: 1,
  },
  editBar: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray300,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  fullSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  fullSizeWrapper: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.white,
  },
});
