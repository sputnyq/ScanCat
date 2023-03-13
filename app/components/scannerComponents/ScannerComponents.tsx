import React, {useState} from 'react';
import {Settings, StyleSheet, View} from 'react-native';
import ScannerButton from '../scanner-button/ScannerButton';

import DocumentScanner, {
  ScanDocumentResponseStatus,
} from 'react-native-document-scanner-plugin';
import {IS_PDF} from '../settings/SettingsKeys';
import {moveFile, readFile} from '../features/FileUtils';
import {useDispatch} from 'react-redux';
import {addSingleFile} from '../../store/reducers/filesReducer';

export default function ScannerComponents() {
  const dispatch = useDispatch();

  const scanDocument = () => {
    const isPdf = Settings.get(IS_PDF);

    DocumentScanner.scanDocument().then(res => {
      if (res?.status === ScanDocumentResponseStatus.Success) {
        res.scannedImages?.forEach(async (si, idx) => {
          const filePath = await moveFile(si, idx);
          const newAppFile = await readFile(filePath);
          if (newAppFile) {
            dispatch(addSingleFile({file: newAppFile}));
          }
        });
      }
    });
  };

  const handleTap = () => {
    scanDocument();
  };

  return (
    <View>
      <ScannerButton onTap={handleTap} />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
});
