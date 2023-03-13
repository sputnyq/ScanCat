import React, {useState} from 'react';
import {Settings, StyleSheet, View} from 'react-native';
import ScannerButton from '../scanner-button/ScannerButton';

import DocumentScanner, {
  ScanDocumentResponseStatus,
} from 'react-native-document-scanner-plugin';
import {IS_PDF} from '../settings/SettingsKeys';
import {moveFile} from '../features/FileUtils';

export default function ScannerComponents() {
  const scanDocument = () => {
    const isPdf = Settings.get(IS_PDF);

    DocumentScanner.scanDocument().then(res => {
      if (res?.status === ScanDocumentResponseStatus.Success) {
        console.log('success');
        res.scannedImages?.forEach(si => {
          console.log('tada');
          console.log(si);
          moveFile(si);
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
