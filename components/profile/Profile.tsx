import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import {Colors, FontSizes} from '../../Styles';
import Grabber from '../commons/Grabber';
import BackupModule from '../settings/BackupModule';
import FormatModule from '../settings/FormatModule';

type Props = {
  onClose: () => void;
};

export default function Profile(props: Props) {
  const {onClose} = props;

  return (
    <View style={styles.root}>
      <Grabber />
      <View style={styles.bar}>
        <Button color={Colors.main} onPress={onClose} title={'Close'} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <FormatModule />
      <BackupModule />
    </View>
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
    fontSize: FontSizes.big,
    fontWeight: 'bold',
  },
});
