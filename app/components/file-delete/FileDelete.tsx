import React from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import i18n from '../../i18n';
import {reloadDir} from '../../store/reducers/filesReducer';
import {Colors} from '../../Styles';
import TouchableIcon from '../commons/TouchableIcon';
import {deleteFile} from '../features/FileUtils';

type Props = {
  file: AppFile;
  cb?: () => void;
};

export default function FileDelete({file, cb}: Props) {
  const dispatch = useDispatch();

  const onRequestDeleteFile = () => {
    deleteFile(file.path).then(() => {
      dispatch(reloadDir());
      cb?.();
    });
  };

  const createConfirmDeletionAlert = () => {
    Alert.alert(i18n('removePromptTitle'), i18n('removePrompt'), [
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
  return (
    <TouchableIcon
      touchProps={{onPress: createConfirmDeletionAlert}}
      iconProps={{name: 'ios-trash-outline', color: Colors.red}}
    />
  );
}
