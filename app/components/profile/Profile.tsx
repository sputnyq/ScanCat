import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FontSizes} from '../../../Styles';
import BackupModule from '../settings/BackupModule';
import FormatModule from '../settings/FormatModule';

type Props = {
  onClose: () => void;
};

export default function Profile(props: Props) {
  const {onClose} = props;

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
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
