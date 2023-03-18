import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FontSizes} from '../../Styles';
import i18n from '../../i18n';
import BackupModule from '../settings/BackupModule';
import FormatModule from '../settings/FormatModule';

export default function Profile() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n('settings')}</Text>
      </View>
      <FormatModule />
      <BackupModule />
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: Colors.gray100,
  },

  bar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  header: {
    width: '100%',
    paddingLeft: 10,
  },
  headerText: {
    fontSize: FontSizes.huge,
    fontWeight: 'bold',
  },
});
