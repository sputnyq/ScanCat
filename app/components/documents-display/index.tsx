import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../Styles';
import {RootState} from '../../store';
import EmptyState from '../empty-state/EmptyState';
import {buildDirPath} from '../features/FileUtils';
import DocsOverview from './DocsOverview';
import FolderBar from './folder-bar/FolderBar';
import * as RNFS from 'react-native-fs';

export default function DocumentsDisplay() {
  const {appFiles} = useAppFiles();

  return (
    <View style={styles.root}>
      <FolderBar />
      {appFiles.length === 0 ? (
        <EmptyState />
      ) : (
        <DocsOverview appFiles={appFiles} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    alignSelf: 'stretch',
  },
});

// HOOK

function useAppFiles() {
  const [appFiles, setAppFiles] = useState<AppFile[]>([]);
  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);

  useEffect(() => {
    listFilesInFolder(buildDirPath(currentDir)).then(setAppFiles);
  }, [currentDir]);

  return {appFiles};
}

async function listFilesInFolder(path: string) {
  let files: AppFile[] = [];

  await RNFS.readDir(path).then(res => {
    files = res.map(toAppFile);
  });

  return files;
}

function toAppFile(readDirItem: RNFS.ReadDirItem) {
  const type = readDirItem.isDirectory() ? 'folder' : 'file';
  const appFile: AppFile = {
    name: readDirItem.name,
    path: readDirItem.path,
    timeStamp: readDirItem.mtime?.getTime(),
    type,
  };

  return appFile;
}
