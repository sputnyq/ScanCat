import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../../Styles';

type Props = {
  label: string;
};

export default function Label(props: Props) {
  return <Text style={styles.root}>{props.label}</Text>;
}

const styles = StyleSheet.create({
  root: {
    color: Colors.gray600,
    textTransform: 'uppercase',
    padding: 8,
    paddingLeft: 15,
  },
});
