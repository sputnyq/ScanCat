import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, FontSizes} from '../../../Styles';
import i18n from '../../../i18n';
import {RootState} from '../../../store';
import {popDir} from '../../../store/reducers/filesReducer';
import AddFolder from '../../add-folder/AddFolder';
import TouchableIcon from '../../commons/TouchableIcon';

export default function FolderBar() {
  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);

  const dispatch = useDispatch();

  const curFolder = useMemo(() => {
    if (currentDir.length === 0) {
      return i18n('myScans');
    }
    return currentDir.at(-1);
  }, [currentDir]);

  const isRoot = useMemo(() => {
    return currentDir.length === 0;
  }, [currentDir]);

  const onBackPress = () => {
    dispatch(popDir());
  };

  return (
    <View style={styles.root}>
      {!isRoot && (
        <View style={styles.touch}>
          <TouchableIcon
            touchProps={{onPress: onBackPress}}
            iconProps={{name: 'ios-arrow-back-outline', style: styles.backIcon}}
          />
        </View>
      )}
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.header}>
        {curFolder}
      </Text>
      <AddFolder />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 30,
  },
  header: {
    color: Colors.white,
    fontSize: FontSizes.big,
    fontWeight: 'bold',
    maxWidth: '70%',
  },
  touch: {
    width: 30,
  },
  backIcon: {
    color: Colors.white,
  },
});
