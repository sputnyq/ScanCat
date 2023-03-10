import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScannerButton from '../scanner-button/ScannerButton';

import DocumentScanner, {
  ScanDocumentResponseStatus,
} from 'react-native-document-scanner-plugin';

export default function ScannerComponents() {
  const [visible, setVisible] = useState(false);

  const scanDocument = () => {
    DocumentScanner.scanDocument().then(res => {
      if (res?.status === ScanDocumentResponseStatus.Success) {
        console.log('success');
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
