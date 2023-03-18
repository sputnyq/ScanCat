import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppFiles} from '../../hooks/useAppFiles';
import {Colors} from '../../Styles';
import EmptyState from '../empty-state/EmptyState';
import DocsOverview from './DocsOverview';
import FolderBar from './folder-bar/FolderBar';

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
