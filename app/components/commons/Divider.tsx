import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../Styles';

export default function Divider() {
  return (
    <View style={styles.root}>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 1,
    width: '100%',
    paddingLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray100,
  },
});
