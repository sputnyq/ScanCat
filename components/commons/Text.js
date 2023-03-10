import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function (props) {
  return <Text style={styles.root}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  root: {
    color: '#fff',
  },
});
