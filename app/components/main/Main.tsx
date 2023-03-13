import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DocumentsDisplay from '../documents-display/DocumentsDisplay';
import Toolsbar from '../toolsbar/Toolsbar';

export default function Main() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        <Toolsbar />
        <DocumentsDisplay />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#6932a8',
  },
  safe: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6932a8',
  },
});
