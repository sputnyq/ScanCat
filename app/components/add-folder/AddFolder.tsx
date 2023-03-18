import React, {useCallback} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../i18n';
import {RootState} from '../../store';
import {pushDir} from '../../store/reducers/filesReducer';
import {buildDirPath, createDir} from '../features/FileUtils';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSizes} from '../../Styles';

export default function AddFolder() {
  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);
  const dispatch = useDispatch();

  const onOk = useCallback(
    async (nextDirName?: string) => {
      if (nextDirName) {
        const nextDir = buildDirPath([...currentDir, nextDirName]);
        await createDir(nextDir);
        dispatch(pushDir({nextDir: nextDirName}));
      }
    },
    [dispatch, currentDir],
  );

  const onPress = async () => {
    Alert.prompt(
      i18n('inputDirName'),
      undefined,
      [
        {text: i18n('cancel') || 'cancel'},
        {text: i18n('ok') || 'OK', onPress: onOk},
      ],
      'plain-text',
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name="ios-folder-outline"
        color={Colors.white}
        size={FontSizes.big}
      />
      <Icon
        style={styles.plusIcon}
        color={Colors.white}
        name="ios-add-circle"
        size={16}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  plusIcon: {
    position: 'absolute',
    right: -6,
    top: -4,
  },
});
