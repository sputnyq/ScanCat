import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../Styles';

export default function Grabber() {
  return (
    <View style={styles.root}>
      <View style={styles.grabber}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grabber: {
    backgroundColor: Colors.gray300,
    height: 5,
    width: 40,
    borderRadius: 3,
  },
});
