import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {Colors} from '../../../Styles';
import {pushDir} from '../../../store/reducers/filesReducer';

type Props = {
  file: AppFile;
};

export default function FolderPreview({file}: Props) {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(pushDir({nextDir: file.name}));
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="folder" size={90} color={Colors.main} />
    </TouchableOpacity>
  );
}
