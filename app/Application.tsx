import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DocumentsDisplay from './components/documents-display';
import ScannerComponents from './components/scannerComponents/ScannerComponents';
import Toolsbar from './components/toolsbar/Toolsbar';
import {Colors} from './Styles';

export default function Application() {
  return (
    <LinearGradient
      style={styles.full}
      colors={[Colors.main, Colors.secondary]}>
      <SafeAreaView style={styles.full}>
        <StatusBar barStyle={'light-content'} />
        <Toolsbar />
        <DocumentsDisplay />
        <ScannerComponents />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
