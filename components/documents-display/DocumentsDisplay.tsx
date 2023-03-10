import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSizes} from '../../Styles';
import EmptyState from '../empty-state/EmptyState';

export default function DocumentsDisplay() {
  const noDocs = true;
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.header}>My Scans</Text>
      </View>
      {noDocs ? <EmptyState /> : null}
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
  header: {
    color: Colors.white,
    fontSize: FontSizes.big,
    fontWeight: 'bold',
  },
});
