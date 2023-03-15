import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors, FontSizes} from '../../../Styles';
import i18n from '../../i18n';
import {RootState} from '../../store';
import EmptyState from '../empty-state/EmptyState';
import DocsOverview from './DocsOverview';

export default function DocumentsDisplay() {
  const appFiles = useSelector<RootState, AppFile[]>(s => s.files.appFiles);

  const noDocs = appFiles.length === 0;

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.header}>{i18n.t('myScans')}</Text>
      </View>
      {noDocs ? <EmptyState /> : <DocsOverview />}
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
    fontSize: FontSizes.huge,
    fontWeight: 'bold',
  },
});
