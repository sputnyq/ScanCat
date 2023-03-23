import React, {useMemo, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAppFiles} from '../../hooks/useAppFiles';
import i18n from '../../i18n';
import {RootState} from '../../store';
import {popDir, setSelectActive} from '../../store/reducers/filesReducer';
import {Colors} from '../../Styles';
import AppModal from '../commons/AppModal';
import TouchableIcon from '../commons/TouchableIcon';
import {buildDirPath, deleteFile} from '../features/FileUtils';
import Profile from '../profile/Profile';

export default function Toolsbar() {
  const {appFiles} = useAppFiles();

  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);

  const selectActive = useSelector<RootState, boolean>(
    s => s.files.selectActive,
  );

  const dispatch = useDispatch();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

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
          color={Colors.white}
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

  return (
    <View style={styles.root}>
      <View>
        <TouchableIcon
          touchProps={{
            onPress: () => setShowSettingsModal(true),
          }}
          iconProps={{
            name: 'ios-settings-outline',
            color: Colors.white,
          }}
        />
      </View>
      <View>{button}</View>
      <AppModal
        onRequestClose={() => setShowSettingsModal(false)}
        visible={showSettingsModal}>
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
