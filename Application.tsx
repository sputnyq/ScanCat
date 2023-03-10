import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from './Styles';
import DocumentsDisplay from './components/documents-display/DocumentsDisplay';
import ScannerComponents from './components/scannerComponents/ScannerComponents';
import Toolsbar from './components/toolsbar/Toolsbar';

export default function Application() {
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
