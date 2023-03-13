import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from './Styles';
import DocumentsDisplay from './app/components/documents-display/DocumentsDisplay';
import ScannerComponents from './app/components/scannerComponents/ScannerComponents';
import Toolsbar from './app/components/toolsbar/Toolsbar';

import * as RNFS from 'react-native-fs';
import {useDispatch} from 'react-redux';
import {addFiles, clearFiles} from './app/store/reducers/filesReducer';

export default function Application() {
  useCreateRootDir();
  useReadFiles();

  return (
    <View style={styles.root}>
      <Toolsbar />
      <DocumentsDisplay />
      <ScannerComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.main,
    paddingTop: 60,
  },
  safe: {
    flex: 1,
  },
});

const SCANS = '/scans';
const rootDir = RNFS.DocumentDirectoryPath + SCANS;

function useCreateRootDir() {
  useEffect(() => {
    RNFS.exists(rootDir).then(isExist => {
      if (!isExist) {
        RNFS.mkdir(rootDir);
      }
    });
  }, []);
}

function useReadFiles() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFiles());
    readFolder(rootDir).then(files => {
      dispatch(addFiles({files}));
    });
  }, []);
}

function toAppFile(readDirItem: RNFS.ReadDirItem) {
  const appFile: AppFile = {
    name: readDirItem.name,
    path: readDirItem.path,
    timeStamp: readDirItem.mtime?.getTime(),
  };

  return appFile;
}

async function readFolder(path: string) {
  const files: AppFile[] = [];

  await RNFS.readDir(path).then(res => {
    res.forEach(async rdi => {
      if (rdi.isDirectory()) {
        const _files = await readFolder(rdi.path);
        files.push(..._files);
      } else {
        files.push(toAppFile(rdi));
      }
    });
  });
  return files;
}
