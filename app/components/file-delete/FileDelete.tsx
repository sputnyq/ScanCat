import React from 'react';
import {ColorValue} from 'react-native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import i18n from '../../i18n';
import {reloadDir} from '../../store/reducers/filesReducer';
import {Colors} from '../../Styles';
import TouchableIcon from '../commons/TouchableIcon';
import {deleteFile} from '../features/FileUtils';

type Props = {
  paths: string[];
  cb?: () => void;
  color?: number | ColorValue | undefined;
};

export default function FileDelete({paths, cb, color = Colors.white}: Props) {
  const dispatch = useDispatch();

  const onRequestDeleteFile = () => {
    paths.forEach(async path => {
      deleteFile(path).then(() => {
        dispatch(reloadDir());
        cb?.();
      });
    });
  };

  const createConfirmDeletionAlert = () => {
    Alert.alert(i18n('removePromptTitle'), undefined, [
      {
        text: i18n('remove'),
        style: 'destructive',
        onPress: onRequestDeleteFile,
      },
      {
        text: i18n('cancel'),
        style: 'cancel',
      },
    ]);
  };
  const disabled = paths.length === 0;
  return (
    <TouchableIcon
      touchProps={{onPress: createConfirmDeletionAlert, disabled}}
      iconProps={{name: 'ios-trash-outline', color}}
    />
  );
}
