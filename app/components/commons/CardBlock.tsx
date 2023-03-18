import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../Styles';

export default function CardBlock(props: any) {
  return <View style={styles.root}>{props.children}</View>;
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});
