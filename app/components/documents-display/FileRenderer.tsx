import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSizes} from '../../Styles';
import FolderPreview from './folder-preview/FolderPreview';
import FilePreview from './file-preview/FilePreview';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  addSelectedFile,
  removeSelectedFile,
} from '../../store/reducers/filesReducer';
import CheckBox from '../commons/CheckBox';

type Props = {
  file: AppFile;
};

type FileRendererFunc = (file: AppFile) => ReactNode;

export default function FileRenderer({file}: Props) {
  const dispatch = useDispatch();

  const selectActive = useSelector<RootState, boolean>(
    s => s.files.selectActive,
  );

  const selectedFiles = useSelector<RootState, string[]>(
    s => s.files.selectedFiles,
  );

  const handleCheckboxPress = (checked: boolean) => {
    if (checked) {
      dispatch(addSelectedFile({filePath: file.path}));
    } else {
      dispatch(removeSelectedFile({filePath: file.path}));
    }
  };

  const isChecked = selectedFiles.includes(file.path);

  let renderer: FileRendererFunc = () => null;

  switch (file.type) {
    case 'file':
      renderer = file => <FilePreview file={file} />;
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
      {selectActive && (
        <View style={styles.checkboxWrapper}>
          <CheckBox isChecked={isChecked} onPress={handleCheckboxPress} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  preview: {
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileName: {
    color: Colors.white,
    fontSize: FontSizes.small,
  },
  checkboxWrapper: {
    top: 0,
    left: 60,
    position: 'absolute',
  },
});
