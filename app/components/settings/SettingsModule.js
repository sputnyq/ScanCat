import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function SettingsModule(props) {
  return <View style={styles.root}>{props.children}</View>;
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
  },
});
