import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../../Styles';
import LitterboxIcon from '../icons/LitterBoxIcon';

export default function EmptyState() {
  return (
    <View style={styles.root}>
      <View style={styles.litterboxWrapper}>
        <LitterboxIcon />
      </View>
      <View>
        {
          //TODO: translate
        }
        <Text style={styles.text2}>No 'sheet' in the box.</Text>
        <Text style={styles.text1}>Anything to add?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: 160,
    display: 'flex',
    flex: 1,
    paddingRight: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  text1: {
    color: Colors._100,
  },
  text2: {
    fontWeight: '600',
    paddingBottom: 5,
    color: Colors._100,
  },
  litterboxWrapper: {
    paddingLeft: 32,
    paddingTop: 80,
  },
});
