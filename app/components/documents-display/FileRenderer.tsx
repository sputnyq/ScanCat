import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSizes} from '../../../Styles';
import FolderPreview from './folder-preview/FolderPreview';
import ImagePreview from './image-preview/ImagePreview';

type Props = {
  file: AppFile;
};

type FileRendererFunc = (file: AppFile) => ReactNode;

export default function FileRenderer({file}: Props) {
  let renderer: FileRendererFunc = file => null;

  switch (file.type) {
    case 'file':
      renderer = file => <ImagePreview file={file} />;
      break;
    case 'folder':
      renderer = file => <FolderPreview file={file} />;
      break;
    default:
      break;
  }

  return (
    <View style={styles.root}>
      <View style={styles.preview}>{renderer(file)}</View>
      <Text numberOfLines={1} style={styles.fileName}>
        {file.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  preview: {},
  fileName: {
    color: Colors.white,
    fontSize: FontSizes.small,
  },
});
