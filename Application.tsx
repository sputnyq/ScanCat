import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from './Styles';
import DocumentsDisplay from './app/components/documents-display/DocumentsDisplay';
import ScannerComponents from './app/components/scannerComponents/ScannerComponents';
import Toolsbar from './app/components/toolsbar/Toolsbar';

import * as RNFS from 'react-native-fs';

export default function Application() {
  useEffect(() => {
    const SCANS = '/scans';
    const rootDir = RNFS.DocumentDirectoryPath + SCANS;
    console.log('ztest');
    RNFS.readDir(rootDir).then(res => {
      res.forEach(ff => {
        console.log(ff.name);
      });
    });
    RNFS.exists(rootDir).then(exists => {
      console.log('exists: ', exists);
      if (!exists) {
        RNFS.mkdir(rootDir);
      }
    });
  }, []);

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
