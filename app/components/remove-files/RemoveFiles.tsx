import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setSelectActive} from '../../store/reducers/filesReducer';
import FileDelete from '../file-delete/FileDelete';

export default function RemoveFiles() {
  const dispatch = useDispatch();
  const paths = useSelector<RootState, string[]>(s => s.files.selectedFiles);

  const cb = useCallback(() => {
    dispatch(setSelectActive({active: false}));
  }, [dispatch]);

  return (
    <View>
      <FileDelete paths={paths} cb={cb} />
    </View>
  );
}
