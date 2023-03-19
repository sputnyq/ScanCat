import React, {useMemo, useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Styles';
import i18n from '../../i18n';
import AppModal from '../commons/AppModal';
import SmileyIcon from '../icons/SmileyIcon';
import Profile from '../profile/Profile';
import {useAppFiles} from '../../hooks/useAppFiles';
import {useDispatch, useSelector} from 'react-redux';
import {popDir, setSelectActive} from '../../store/reducers/filesReducer';
import {buildDirPath, deleteFile} from '../features/FileUtils';
import {RootState} from '../../store';

export default function Toolsbar() {
  const {appFiles} = useAppFiles();

  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);

  const selectActive = useSelector<RootState, boolean>(
    s => s.files.selectActive,
  );

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const openProfileModal = () => {
    setVisible(true);
  };

  const handleRemoveDirRequest = () => {
    dispatch(popDir());
    deleteFile(buildDirPath(currentDir));
  };

  const handleSelectActiveChange = (active: boolean) => {
    return function () {
      dispatch(setSelectActive({active}));
    };
  };

  const button = useMemo(() => {
    if (currentDir.length === 0 && appFiles.length === 0) {
      return null;
    } else if (appFiles.length === 0) {
      return (
        <Button
          color={Colors.complementary}
          title={i18n('removeDir')}
          onPress={handleRemoveDirRequest}
        />
      );
    } else if (selectActive) {
      return (
        <Button
          onPress={handleSelectActiveChange(false)}
          color={Colors.white}
          title={i18n('cancel')}
        />
      );
    } else if (!selectActive) {
      return (
        <Button
          onPress={handleSelectActiveChange(true)}
          color={Colors.white}
          title={i18n('select')}
        />
      );
    }
  }, [appFiles, currentDir, handleRemoveDirRequest]);

  const closeProfileModal = () => {
    setVisible(false);
  };

  //TODO: increase touch area
  return (
    <View style={styles.root}>
      <View>
        <TouchableOpacity onPress={openProfileModal}>
          <SmileyIcon />
        </TouchableOpacity>
      </View>
      <View>{button}</View>
      <AppModal onRequestClose={closeProfileModal} visible={visible}>
        <Profile />
      </AppModal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 80,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
